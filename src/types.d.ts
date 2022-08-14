export interface Video {
  id: string;
  category: string;
  isTrending: boolean;
  rating: string;
  thumbnail: {
    regular: { large: string; medium: string; small: string },
    trending: { large: string; small: string };
  };
  title: string,
  year: number
}

export interface VideoTrending extends Video {
  isTrending: true
}
