import { Column, Entity, OneToMany } from 'typeorm';
import { Account, BaseEntity } from '@entities/index';

@Entity()
class User extends BaseEntity {

    @OneToMany(type => Account, account => account.user)
    public accounts: Array<Account>;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public fullName: string;

    @Column({
        type: 'varchar',
        length: 11
    })
    public identityNo: string;

    @Column({
        type: 'varchar',
        length: 32
    })
    public pinCode: string;

    @Column({
        type: 'varchar',
        length: 15,
        unique: true,
    })
    public phone: string;

    @Column({
        type: 'varchar',
        length: 255,
        unique: true,
    })
    public email: number;

    @Column({
        type: 'varchar',
        length: 255
    })
    public deviceId: string;
}

export default User;
