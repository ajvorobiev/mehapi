import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class ServerInfo {

    /**
     * Always 1
     */
    @PrimaryColumn()
    private id: number = 1;

    @Column()
    name: string;
    
    @Column()
    version: string;

    @Column()
    bootTime: Date;
}