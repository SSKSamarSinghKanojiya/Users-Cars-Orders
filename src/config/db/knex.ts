import Knex from "knex";
import config from "../../../knexfile";

const env: string = process.env.NODE_ENV || "development";
const knexConfig = config[env];
const BaseKnex = Knex(knexConfig);
export { BaseKnex };


// // src/config/db/knex.ts
// import knex from 'knex';
// import config from '../../../knexfile';

// const environment = process.env.NODE_ENV || 'development';
// const configs = config[environment];

// const BaseKnex = knex(configs);

// export default BaseKnex;
