import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryColumn()
  isbn: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  authors: string;

  @Column({ nullable: true })
  edition?: string;

  @Column({ nullable: true })
  format: string;

  @Column()
  pages: string;

  @Column()
  rating: string;

  @Column()
  ratingCount: string;

  @Column()
  reviewCount: string;

  @Column({ nullable: true })
  genres?: string;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column()
  publicationDate: string;

  @Column()
  publisher: string;
}
