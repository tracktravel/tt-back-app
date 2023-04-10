import { Injectable } from '@nestjs/common';
import { Responsible } from './schema/resposible.schema';
import { ResponsibleRepository } from './responsible.repository';
// import Validate

@Injectable()
export class AuthResponsibleService {
  constructor(private readonly _responsibleRepository: ResponsibleRepository) {}

  async validateUser(details: any): Promise<Responsible> {
    return this._responsibleRepository.validateUser(details);
  }

  async findById(id: string): Promise<Responsible> {
    const user = await this._responsibleRepository.findById(id);
    return user;
  }

}