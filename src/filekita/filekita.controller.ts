import { Controller, Get, Param } from '@nestjs/common';
import { FilekitaService } from './filekita.service';

@Controller('filekita')
export class FilekitaController {
    constructor(private FilekitaService: FilekitaService){

    }
    
    @Get()
    lihatOutput(): string{
        return 'ini controller file kita';
    }

    @Get(':id')
    lihatDetail(@Param('id')id: string): string{
        return 'ini controller detail' + id ;
    }

    @Get('service')
    lihatSemua(){
        return this.FilekitaService.lihatSemua();
    }
}
