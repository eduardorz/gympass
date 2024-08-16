import { Router } from 'express';
import usersRouter from './users/usersRoutes';
// import appointmentRouter from './appointmentsRoutes';
// import userRoutes from './usersRoutes'

const router: Router = Router();

router.use('/users', usersRouter);
// router.use('/appointments', appointmentRouter);

export default router;

 
