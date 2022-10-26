import express from 'express';
import emailController from '../../controllers/sendEmail';

const router = express();

router.get('/notification', emailController.confirmationMeeting);




export = router;