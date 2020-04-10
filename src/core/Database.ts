import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import { EnvironmentEnums } from '@enums/index';
import * as Tables from '@entities/index';

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } = EnvironmentEnums;

class Database {
    private connection:Connection;

    async connect (): Promise<Connection> {
        if (!this.connection) {
            // @ts-ignore
            this.connection = await createConnection({
                type: 'mysql',
                host: DATABASE_HOST,
                port: DATABASE_PORT,
                username: DATABASE_USERNAME,
                password: DATABASE_PASSWORD,
                database: DATABASE_NAME,
                entities: [
                    ...Object.values(Tables),
                ],
                synchronize: true,
                logging: true,
            });
        }

        return this.connection;
    }
}

export default Database;
