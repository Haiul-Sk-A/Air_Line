import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST || '34.69.223.233',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Haiul@2003',
});

mysqlPool.getConnection().then(conn => {
    return conn
    .ping()
    .then(()=>{
        console.log('✅ MySQL pool connected successfully.');
        conn.release();
    })
}).catch(err =>{
    console.log('❌ Unable to connect to MySQL:', err.message);
    process.exit(1)
})

export default mysqlPool;