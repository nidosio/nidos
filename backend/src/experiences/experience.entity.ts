import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Theme } from '../theme/theme.entity';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Theme, (theme) => theme.experiences, { nullable: false })
  theme: Theme[];

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', update: false, select: false })
  created: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false })
  updated: Date;
}
