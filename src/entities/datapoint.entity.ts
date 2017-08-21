import { Entity, PrimaryColumn, Column } from "typeorm";
var Guid = require("guid");

@Entity()
export class Datapoint {

    constructor(uuid?: string) {
        if(uuid) {
            this.id = uuid;
        } else {
             this.id = Guid.create().value;
        }
    }

    @PrimaryColumn("uuid")
    id: string;

    @Column()
    value: number;
    
    @Column()
    date: Date;
}