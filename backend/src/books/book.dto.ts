import { IsString, IsNumber, IsOptional, IsInt, IsDate } from 'class-validator';

export class BookDto {
  constructor(book: any) {
    this.isbn = book.isbn;
    this.title = book.title;
    this.description = book.description;
    this.authors = book.authors;
    this.edition = book.edition;
    this.format = book.format;
    this.pages = book.pages ? Number(book.pages) : undefined;
    this.rating = book.rating ? Number(book.rating) : undefined;
    this.ratingCount = book.ratingCount ? Number(book.ratingCount) : undefined;
    this.reviewCount = book.reviewCount ? Number(book.reviewCount) : undefined;
    this.genres = book.genres;
    this.imageUrl = book.imageUrl;
    this.publicationDate = book.publicationDate
      ? new Date(book.publicationDate)
      : undefined;
    this.publisher = book.publisher;
  }

  @IsString()
  isbn: string;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  authors?: string;

  @IsOptional()
  @IsString()
  edition?: string;

  @IsOptional()
  @IsString()
  format?: string;

  @IsOptional()
  @IsInt()
  pages?: number;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  @IsInt()
  ratingCount?: number;

  @IsOptional()
  @IsInt()
  reviewCount?: number;

  @IsOptional()
  @IsString()
  genres?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsDate()
  publicationDate?: Date;

  @IsOptional()
  @IsString()
  publisher?: string;
}
