import { Router } from 'express';
import usersRouter from './users/usersRoutes';
import appointmentRouter from './appointments/appointmentsRoutes';


const router: Router = Router();

router.use('/users', usersRouter);
router.use('/appointments', appointmentRouter);

export default router;

 
