import winston from "winston";
import { Request, Response } from 'express';

const { combine, timestamp, json, printf } = winston.format;
const timestampFormat = "DD-MMM-YYYY HH:mm:ss";

// Logger for API endpoints

export const httLogger = winston.createLogger({
  format: combine(
    timestamp({ format: timestampFormat }),
    json(),
    printf(({ timestamp, level, message, ...data }) => {
      const response = {
        level,
        timestamp,
        message,
        data,
      };
      return JSON.stringify(response);
    })
  ),
  transports: [new winston.transports.Console()],
});



export function formatHTTPLoggerResponse(
  req: Request,
  res: Response,
  responseBody: any
) {
  return {
    request: {
      headers: req.headers,
      host: req.headers.host,
      baseUrl: req.baseUrl,
      url: req.url,
      method: req.method,
      // body: req.body,
      params: req.params,
      query: req.query,
      clientIp:
        req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    },
    response: {
      headers: res.getHeaders(),
      statusCode: res.statusCode,
      body: responseBody,
    },
  };
}