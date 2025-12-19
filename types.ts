
export interface Station {
  id: string;
  name: string;
  genre: string;
  subGenre?: string;
  location: string;
  description: string;
  bitrate: string;
  listeners: string;
  imageUrl: string;
  tags: string[];
  website?: string;
  socials?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface ChartDataPoint {
  time: string;
  listeners: number;
}
