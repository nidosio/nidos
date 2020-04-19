import { ValidationError } from 'class-validator';

export interface BookQueryResponse {
  docs: {
    author_name: string;
    title: string;
    isbn: string[];
  }[];
}

export interface BookUploadResult {
  booksToUpload: number;
  booksUploaded: number;
  errors: Record<string, ValidationError[]>;
}
