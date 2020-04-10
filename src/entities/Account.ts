import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity, User } from '@entities/index';

@Entity()
export default class Account extends BaseEntity {

    @ManyToOne(type => User, user => user.accounts)
    public user: User;

    @Column({
        type: 'decimal',
        precision: 19,
        scale: 4,
        default: 0,
    })
    public balance: number;

    @Column({
        type: 'varchar',
        length: 3
    })
    public currencyCode: string;

    @Column({
        type: 'varchar',
        length: 255
    })
    public accountNo: string;

    @Column({
        type: 'boolean',
    })
    public isMainAccount: boolean;
}
