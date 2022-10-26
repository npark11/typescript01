import { Document } from 'mongoose';

export default interface IBook extends Document {
    title: string;
    authour: string;
    extraInformation: string;
}