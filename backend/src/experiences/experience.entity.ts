import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';

import { Theme } from '../themes/theme.entity';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  takeaway: string;

  @Column()
  description: string;

  @ManyToMany(() => Theme, (theme) => theme.experiences, { nullable: false })
  themes: Theme[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated: Date;
}
