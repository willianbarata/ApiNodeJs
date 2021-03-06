import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();


//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//configurações de rota
app.use(statusRoute);
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar'});
});



//inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000');
});