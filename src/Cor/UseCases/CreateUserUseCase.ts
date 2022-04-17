import UserRepository from "../../Infra/Repository/UserRepository";

export default class CreateUserUseCase {
    userRepository: UserRepository;

    constructor(userRepository : UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute(name : string, email: string, password: string, isAdmin: boolean) {
        return await this.userRepository.create(name, email, password, isAdmin);
    }
}