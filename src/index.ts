import 'module-alias/register';
import express, { Express } from 'express';
import { Database, Routes } from '@core/index';
import { EnvironmentEnums } from '@enums/index';

const app:Express = express();
new Database().connect();

app.use(express.json());
app.use('/', Routes);
app.listen(EnvironmentEnums.SERVER_PORT);
