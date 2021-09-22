import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Price extends BaseEntity {
    @PrimaryGeneratedColumn()
    priceSeq!: number

    @Column()
    P_SEQ!: number

    @Column()
    M_SEQ!: number

    @Column()
    M_NAME!: string

    @Column()
    A_SEQ!: number

    @Column()
    A_NAME!: string

    @Column()
    A_UNIT!: string

    @Column()
    A_PRICE!: string

    @Column()
    P_YEAR_MONTH!: string

    @Column()
    ADD_COL!: string

    @Column()
    P_DATE!: string

    @Column()
    M_TYPE_CODE!: string

    @Column()
    M_TYPE_NAME!: string

    @Column()
    M_GU_CODE!: string

    @Column()
    M_GU_NAME!: string
}
