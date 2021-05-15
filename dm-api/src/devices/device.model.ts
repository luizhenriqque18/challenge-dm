import { Column, Model, Table } from "sequelize-typescript";


@Table
export class Device extends Model {

    @Column({primaryKey: true, autoIncrement: true})
    id: number;

    @Column
    cor: string;

    @Column
    partNumber: number;
}
