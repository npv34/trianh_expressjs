import AppDataSource from "../database/datasource.ts";

class BaseRepository {
    protected repository;
    constructor(entity: any) {
        this.repository = AppDataSource.getRepository(entity);
    }

    public async getAll() {
        return await this.repository.find();
    }

    public async findById(id: any) {
        return await this.repository.findOne({ where: { id } });
    }
}

export default BaseRepository;
