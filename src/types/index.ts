export interface Story {
  id: number;
  displayName: string;
  title: string;
  genre: string;
  fullSegments: string[];
  summarySegments: string[];
  images: { src: string; alt: string }[];
}
