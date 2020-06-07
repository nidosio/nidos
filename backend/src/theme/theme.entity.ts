import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Experience } from '../experiences/experience.entity';

@Entity()
export class Theme {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Experience, (experience) => experience.theme, { eager: true, nullable: false })
  experiences: Experience[];

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', update: false, select: false })
  created: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false })
  updated: Date;
}
