import mysql from 'mysql2/promise';

// export const connection = await mysql.createPool({
//     host: 'MYSQL8001.site4now.net',
//     user: 'a44a50_ejemplo',
//     password: 'Password1!',
//     database: 'db_a44a50_ejemplo'
// });

export const connection = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin1234',
    database: 'db_a44a50_ejemplo'
});



