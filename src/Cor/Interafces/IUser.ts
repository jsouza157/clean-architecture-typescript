import UserEntity from "../Entity/UserEntity";

export default interface IUser {
    create(name : string, email: string, password : string, isAdmin : boolean) : Promise<UserEntity>
}