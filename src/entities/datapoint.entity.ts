import { Entity, PrimaryColumn, Column } from "typeorm";
import { Guid } from "guid";

@Entity()
export class Datapoint {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    value: number;
    
    @Column()
    date: Date;
}