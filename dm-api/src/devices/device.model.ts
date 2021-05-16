import { Column, HasMany, Model, Table } from "sequelize-typescript";


@Table({modelName: "device"})
export class Device extends Model {

    @Column({primaryKey: true, autoIncrement: true})
    id: number;

    @Column
    color: string;

    @Column
    partNumber: number;
}
