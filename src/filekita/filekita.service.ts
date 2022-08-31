import { Injectable } from '@nestjs/common';

@Injectable()
export class FilekitaService {
    async lihatSemua(){
        return "Ini di service";
    }
}
