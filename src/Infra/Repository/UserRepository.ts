import UserEntity from "../../Cor/Entity/UserEntity";
import IUser from "../../Cor/Interafces/IUser";

export default class UserRepository implements IUser {
    public async create(name: string, email: string, password: string, isAdmin: boolean): Promise<UserEntity> {
        return await new UserEntity(name, email, password, isAdmin);
    }
}