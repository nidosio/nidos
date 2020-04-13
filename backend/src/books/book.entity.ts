import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryColumn()
  isbn: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  authors?: string;

  @Column({ nullable: true })
  edition?: string;

  @Column({ nullable: true })
  format?: string;

  @Column({ nullable: true, type: 'integer' })
  pages?: number;

  @Column({ nullable: true, type: 'decimal' })
  rating?: number;

  @Column({ nullable: true, type: 'integer' })
  ratingCount?: number;

  @Column({ nullable: true, type: 'integer' })
  reviewCount?: number;

  @Column({ nullable: true })
  genres?: string;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ nullable: true, type: 'date' })
  publicationDate?: Date;

  @Column({ nullable: true })
  publisher?: string;
}
