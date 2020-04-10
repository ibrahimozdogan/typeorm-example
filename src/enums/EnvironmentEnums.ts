import dotenv from 'dotenv';

dotenv.config();

interface EnvironmentEnumsInterface {
    DATABASE_HOST: string
    DATABASE_PORT: string
    DATABASE_NAME: string
    DATABASE_USERNAME: string
    DATABASE_PASSWORD: string
    SERVER_PORT: string
}

declare const process : {
    env: EnvironmentEnumsInterface
};

const EnvironmentEnums:EnvironmentEnumsInterface = {
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME,
    SERVER_PORT: process.env.SERVER_PORT,
};

export default EnvironmentEnums;
