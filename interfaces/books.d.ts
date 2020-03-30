// @TODO revisit Book definition when search integration is ready.

export interface Book {
  authorName: string;
  title: string;
  isbn: string[];
  bookCover?: {
    url: string;
    description: string;
  };
  description?: string;
}
