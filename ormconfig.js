require('dotenv').config();
module.exports={
    name: 'default',
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt (process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_NAME,
    synchronize: true,
    dropShema: false,
    logging: true,
    entities:['src/**/*.entity.ts','dist/**/*.entity.js'],
};