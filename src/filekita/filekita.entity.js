import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
    
export class filekita{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length : 500})
    name: string;
    
    @Column('text')
    deckripsi : string;

     @Column()
    isPublik : boolean;
}