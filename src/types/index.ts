export interface Story {
  id: number;
  createdAt?: string;
  screeningDate?: string;
  displayName: string;
  title: string;
  genre: string;
  fullSegments: string[];
  summarySegments: string[];
  images: { src: string; alt: string }[];
  soundtrack?: {
    artist?: string;
    title?: string;
    url?: string;
  };
}
