import { Express } from 'express';
import { loginRouter } from '../../app/features/login/routes';
import { userRouter } from '../../app/features/user/routes';
import { vagaRouter } from '../../app/features/vaga/routes';
import { applyRouter } from '../../app/features/apply/routes';

export function registerRoutes(app: Express) {
  app.get('/health-check', (req, res) => res.status(200).json({ message: 'Ok' }));

  app.use('/users', userRouter);

  app.use('/login', loginRouter);

  app.use('/vagas', vagaRouter);
  
  app.use('/apply', applyRouter);

}
