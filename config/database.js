import pg from 'pg';
import databaseConfig from '../utils/db-config.js';

const {Pool} = pg;
const pool = new Pool(databaseConfig);

// using client connect and release to not crash the server https://node-postgres.com/features/pooling
const database = {
    async executeWithoutValue(text) {
        const client = await pool.connect();
        const res = await client.query(text);
        client.release();
        return res;
    },

    async executeWithValue(text, values) {
        const client = await pool.connect();
        const res = await client.query(text, values);
        client.release();
        return res;
    }
}

export default database;