import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export default abstract class BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'integer',
        unsigned: true,
    })
    public id: number;

    @CreateDateColumn({
        type: 'timestamp',
    })
    public createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
    })
    public updatedDate: Date;

    @Column({
        type: 'boolean',
        default: true,
    })
    public isActive: boolean;
}
