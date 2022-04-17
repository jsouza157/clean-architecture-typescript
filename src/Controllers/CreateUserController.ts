import { Request, Response } from "express";

import CreateUserUseCase from "../Cor/UseCases/CreateUserUseCase";
import UserRepository from "../Infra/Repository/UserRepository";


export default class CreateUserController {
    constructor() {
    }

    public async create(req : Request, res : Response) {
        try {
            const userData = req.body;
            const createUserUseCase = new CreateUserUseCase(new UserRepository);
            const user = await createUserUseCase.execute(userData.name, userData.email, userData.password, userData.isAdmin);
            return res.status(201).json(user);
        } catch(error : any) {
            return res.status(500).json(error.message);
        }
    }
}