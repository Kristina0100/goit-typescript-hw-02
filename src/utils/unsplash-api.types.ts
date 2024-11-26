export type ApiImage = {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string | null;
  likes: number;
  user: {
    name: string;
  };
};

export type ApiResponse = {
  total: number;
  total_pages: number;
  results: ApiImage[];
};