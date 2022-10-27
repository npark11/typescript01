import { Request, Response, NextFunction } from 'express';
import bcryptjs, { hash } from 'bcryptjs';
import logging from '../config/logging';

const NAMESPACE = "User";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Token validated, user authorized");

    return res.status(200).json({
        message: "Authorized"
    });
};

const register = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body;

    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(500).json({
                messge: hashError.message,
                error: hashError
            });
        }

        // TODO: Insert user into DB here
    });
};

const login = (req: Request, res: Response, next: NextFunction) => {};

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {};

export default { validateToken, register, login, getAllUsers };