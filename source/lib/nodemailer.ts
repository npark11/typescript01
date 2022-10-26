import { createTransport, SendMailOptions } from 'nodemailer';
import emailconfig from '../config/config';

export const mailer = createTransport(emailconfig.smtp);

const confirmOptions = {
    register: (): SendMailOptions => {
        return {
            from: 'npark@empoweredfutures.ca',
            to: 'b151b8992b-090311@inbox.mailtrap.io, npark@empoweredfutures.ca',
            subject: 'Confirmation of the Meeting',
            html: `<h2>Your meeting is confirmed.</h2>`
        };
    }
};

export default { confirmOptions };
