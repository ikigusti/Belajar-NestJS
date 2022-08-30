import {  Module } from '@nestjs/common';
import { filekita } from './filekita.entity';
import { TypeOrmModule } from '@nestjs/typeorm'
// import { filekitacontroller } from './filekita.controller';
// import {filekitaService} 

@Module({
    imports: [TypeOrmModule.forFeature([filekita])],
    // controllers: [filekitacontroller],
})
export class FilekitaModule {}
