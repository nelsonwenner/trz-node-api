import { QueryRunner, getRepository } from 'typeorm';
import SurvivorEntity from '../models/Survivor';

interface DataDTO {
  name: string;
  age: number;
  sex: string;
}

export class SurvivorRepository {
  public static async create(
    data: DataDTO,
    queryRunner: QueryRunner
  ): Promise<SurvivorEntity> {
    const { connection } = queryRunner;
    const survivorsRepository = connection.getRepository(SurvivorEntity);
    const survivor = survivorsRepository.create(data);
    await survivorsRepository.save(survivor);
    return survivor;
  }

  public static async getSurvivor(id: string): Promise<SurvivorEntity> {
    const survivorRepository = getRepository(SurvivorEntity);
    const survivor = await survivorRepository.findOne({ where: { id } });
    return survivor;
  }
}
