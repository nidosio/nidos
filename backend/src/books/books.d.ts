export interface BookQueryResponse {
  docs: {
    author_name: string;
    title: string;
    isbn: string[];
  }[];
}
