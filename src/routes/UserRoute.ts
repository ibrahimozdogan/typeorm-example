import { Request, Response, Router } from 'express';

const UserRoute = function (route: Router) {
    route.post('/test', async (request: Request, response: Response) => {
        response.send({ status: true });
    });

};

export default UserRoute;
