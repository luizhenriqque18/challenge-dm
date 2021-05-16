import { Exclude, Transform } from "class-transformer";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "src/category/category.model";


@Table({modelName: "device"})
export class Device extends Model {

    @Column({primaryKey: true, autoIncrement: true})
    id: number;

    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    categoryId: number

    @BelongsTo(() => Category)
    category: Category;

    @Column
    color: string;

    @Column
    partNumber: number;
}
