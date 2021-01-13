import { Entity, Column, PrimaryColumn } from "typeorm";
import { uuid } from "uuidv4";

@Entity()
export class User {
  @PrimaryColumn()
  private readonly id: string;

  @Column()
  private name: string;

  @Column()
  private surname: string;

  @Column()
  private age: number;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)
    if(!id){
      this.id = uuid()
    }
  }
}