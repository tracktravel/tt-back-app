/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AgencyController } from './agency.controller';
import { AgencyService } from './agency.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Agency, AgencySchema } from './schema/agency.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Agency.name, schema: AgencySchema }]),
  ],
  controllers: [AgencyController],
  providers: [AgencyService],
  exports: [AgencyService, MongooseModule],
})
export class AgencyModule {}
