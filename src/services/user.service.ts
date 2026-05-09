import UserRepository from "../repositories/user.repository.ts";

class UserService {
    protected userRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAllUsers() {
        return await this.userRepository.getAll();
    }

    async delete(id: any) {
        try {
            const userDelete = await this.userRepository.findById(id);
            if(!userDelete) {
                throw new Error("User not found");
            }
            return await this.userRepository.delete(userDelete);
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default UserService;

