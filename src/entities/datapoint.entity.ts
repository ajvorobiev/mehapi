import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Datapoint {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    value: number;
    
    @Column()
    date: Date;
}