import { Request, Response } from 'express';
import configuration from '../lib/nodemailer';
import { mailerService } from '../services/mailer_service';

/** SignUp & SignIn */

/** Meeting */

async function confirmationMeeting(req: Request, res: Response) {
    const options = configuration.confirmOptions.register();
    await mailerService.send(options);
    res.status(200).json({ message: "Confirmmation has been sent." });
}

/** NewsLetter */



export default { confirmationMeeting };