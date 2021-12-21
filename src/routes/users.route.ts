import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

//get /users
//get /users/:uuid
//post /users
//put /users/:uuid
//delete /users/:uuid

const usersRoute = Router();

usersRoute.get('/users', (req : Request,res: Response ,next: NextFunction) =>{
    const users = [{ userName: 'Willian' }];
    res.status(StatusCodes.OK).json(users)
}); 

usersRoute.get('/users/:uuid', (req : Request,res: Response ,next: NextFunction) =>{ 
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });

});

export default usersRoute;