import pg from 'pg'

const config = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    ssl: {
        rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config);