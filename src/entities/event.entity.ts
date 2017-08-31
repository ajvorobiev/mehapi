import { Entity, PrimaryColumn, Column } from "typeorm";
var Guid = require("guid");

@Entity()
export class Event {

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
    description: string;
    
    @Column()
    date: Date;
}