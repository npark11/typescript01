import { MailOptions } from 'nodemailer/lib/smtp-pool';
import { mailer } from '../lib/nodemailer';

export class MailerService {
    async send(mailOptions: MailOptions) {
        try {
            await mailer.sendMail(mailOptions);
        } catch (error) {
            console.error(error);
        }
    }
}


export const mailerService = new MailerService();