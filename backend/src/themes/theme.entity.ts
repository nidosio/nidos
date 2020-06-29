import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { Experience } from '../experiences/experience.entity';

@Entity()
export class Theme {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  emoji: string;

  @ManyToMany(() => Experience, (experience) => experience.themes, { nullable: true })
  experiences: Experience[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated: Date;
}
