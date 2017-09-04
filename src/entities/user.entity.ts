import { Entity, PrimaryColumn, Column } from "typeorm";
var Guid = require("guid");

@Entity()
export class User {

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
    username: string;
    
    @Column()
    password: string;

    @Column()
    salt: string;
}