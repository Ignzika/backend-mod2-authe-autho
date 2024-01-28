import pg  from 'pg';
import {db} from './config.js';

const pool = new pg.Pool(db);

// aviso de la DB si esta conectada
pool.on("connect", () => console.log(" battle control initiated "))

export default pool;