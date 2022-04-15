import CreateUserUseCase from "../Cor/UseCases/CreateUserUseCase";
import UserRepository from "../Infra/Repository/UserRepository";

test("Should create new user", async function () {
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);
    const user = await createUserUseCase.execute("Jefferson", "jefferson@gmail.com", "123456", true);

    expect(user.name).toBe("Jefferson");
});