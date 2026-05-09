import RoleRepository from "../repositories/role.repository.ts";

class RoleService {
    protected roleRepository;
    constructor() {
        this.roleRepository = new RoleRepository();
    }
    public async getAll() {
        return await this.roleRepository.getAll();
    }
}

export default RoleService;