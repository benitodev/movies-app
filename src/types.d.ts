export type Category = 'Movie' | 'TV Series'
export interface Video {
  id: string;
  category: Category;
  isTrending: boolean;
  isSaved: boolean;
  rating: string;
  thumbnail: {
    regular: { large: string; medium: string; small: string },
    trending: { large: string; small: string };
  };
  title: string,
  year: number
}

export type VideoId = Pick<Video, 'id'>
