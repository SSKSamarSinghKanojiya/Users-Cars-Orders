import dotenv from "dotenv";

// dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

interface ExtendedConfig {
  [key: string]: {
    client: string;
    connection: {
      host: string;
      user: string;
      password: string;
      database: string;
      port: number;
    };
    pool: {
      min: number;
      max: number;
    };
    migrations: {
      directory: string;
    };
    seeds: {
      directory: string;
    };
    debug?: boolean;
  };
}

const config: ExtendedConfig = {
  development: {
    // client: process.env.DB_CLIENT!,
    client: 'pg',
    connection: {
      host: "localhost",
      // host: process.env.DB_HOST!,
      user: "postgres",
      // user: process.env.DB_USER!,
      password: "postgres",
      // password: process.env.DB_PASS!,
      database: "bcr_db",
      // database: process.env.DB_NAME!,
      port: 5432,
      // port: Number(process.env.DB_PORT!),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/config/db/migrations",
    },
    seeds: {
      directory: "./src/config/db/seeds",
    },
    debug: true, // Enable query debugging
  },
};

export default config;
