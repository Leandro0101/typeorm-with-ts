import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  constructor(props: Omit<Game, 'id'>) {
    Object.assign(this, props)
  }
}

