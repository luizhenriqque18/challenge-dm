import { Column, Model, Table } from "sequelize-typescript";


@Table({modelName: "category"})
export class Category extends Model {

    @Column({primaryKey: true, autoIncrement: true})
    id: number;

    @Column
    name: string;
}
