import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
  MAJITEL = 'majitel',
  UCETNI = 'ucetni',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string; // bude hashované

  @Column({ type: 'text' })
  role: UserRole;
}
