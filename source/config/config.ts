import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
//    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const SMTP = {
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
        user: '2977d7955bb2fe',
        pass: '03dfd149aa6612'
    }
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'oliveOil';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'oliveOilPasta89';
//const MONGO_HOST = process.env.MONGO_PASSWORD || '';

const MONGO = {
    //    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.ujhrstl.mongodb.net/?retryWrites=true&w=majority`
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER,
    smtp: SMTP
};

export default config;
