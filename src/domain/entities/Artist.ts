export type Artist = {
  id: string;
  slug: string;
  category: string;
  isFeatured: boolean;
  sortOrder: number;
  nameCa: string;
  nameEs: string;
  nameEn: string;
  bioCa: string;
  bioEs: string;
  bioEn: string;
  imageUrl?: string;
  videoUrl?: string;
  websiteUrl?: string;
  youtubeIds: string[];
  isActive: boolean;
};

