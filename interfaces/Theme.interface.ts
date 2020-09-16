import { Image } from "./Image.interface.s";

export interface Theme {
  id: number;
  name: string;
  wallpapers: number | undefined;
  icons: number | undefined;
  description: string;
  size: string | undefined;
  website: string;
  websiteUrl: string;
  images: Image[];
}
