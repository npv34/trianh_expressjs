import Role from "../database/entities/role.entity.ts";
import BaseRepository from "./base.repository.ts";

class RoleRepository extends BaseRepository {
    constructor(){
        super(Role)
    }
}

export default RoleRepository;