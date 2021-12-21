import { Router, Response, Request, NextFunction } from 'express';

//get /users
//get /users/:uuid
//post /users
//put /users/:uuid
//delete /users/:uuid

const usersRoute = Router();

usersRoute.get('/users', (req : Request,res: Response ,next: NextFunction) =>{
    const users = [{ userName: 'Willian' }];
    res.status(200).json(users)
}); 

usersRoute.get('/users/:uuid', (req : Request,res: Response ,next: NextFunction) =>{ 
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });

});

export default usersRoute;