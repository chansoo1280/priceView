import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, Unique } from 'typeorm'

@Entity()
export class Count extends BaseEntity {
    @PrimaryGeneratedColumn()
    countSeq!: number

    @Unique('C_CODE', ['C_CODE'])
    @Column()
    C_CODE!: string

    @Column()
    A_SEQ!: string

    @Column()
    A_NAME!: string

    @Column()
    A_UNIT!: string

    @Column()
    P_YEAR!: string

    @Column()
    P_YEAR_MONTH!: string

    @Column()
    M_TYPE_CODE!: string

    @Column()
    M_TYPE_NAME!: string

    @Column()
    M_GU_CODE!: string

    @Column()
    M_GU_NAME!: string

    @Column()
    length!: number

    @Column()
    AVER_VAL!: number
}
