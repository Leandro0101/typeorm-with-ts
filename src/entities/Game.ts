import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  private readonly id: string;

  @Column()
  private name: string;

  @Column()
  private description: string;

  @Column()
  private price: number;

  constructor(props: Omit<Game, 'id'>) {
    Object.assign(this, props)
  }
}