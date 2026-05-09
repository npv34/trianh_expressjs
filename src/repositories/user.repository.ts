import BaseRepository from "./base.repository.ts";
import User from "../database/entities/user.entity.ts";

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }

    async delete(user: any) {
        return await this.repository.softRemove(user);
    }
    
}

export default UserRepository;