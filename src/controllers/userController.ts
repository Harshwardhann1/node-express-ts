import {Request, Response} from 'express';
import {UserModel} from '../entity/userModel';

export class userController {
    static async createUser(req: Request, res: Response) {
        try{
            const user = await UserModel.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            res.status(500).json({message: 'Internal server error'})
        }
    }

    static async getUser(req: Request, res: Response) {
        try {
            const user = await UserModel.findAll();
            res.status(200).json(user)
        }catch (error) {
            res.status(500).json({message: 'Internal server error'})
        }
    }

    static async getUserByName(req: Request , res: Response) {
        try {
            const user = await UserModel.findByName(req.body.fname);
            if(user) {
                res.status(200).json(user); 
            } else {
                res.status(404).json({message: 'User not Found'})
            }
        } catch (error) {
            res.status(500).json({message: 'Internal server error'})
        }
    }


    static async deleteUser(req: Request, res: Response) {
        try {
            await UserModel.delete(req.body.fname);
            res.status(200).json({message: 'User deleted'}); 
           
        } catch (error) {
            res.status(500).json({message: 'Internal server error'})
        }
    }
}