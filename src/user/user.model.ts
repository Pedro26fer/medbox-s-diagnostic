import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { v4 as uuidv4} from 'uuid'

@Entity()
export class UserModel {
    
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 40})
    nome: string

    @Column({length: 255})
    password: string

    constructor() {
        if(!this.id){
            this.id = uuidv4()
        }
    }
    
}