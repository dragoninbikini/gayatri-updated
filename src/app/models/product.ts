export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  type: string;
  brand: string;
  gender: string;
  watchType?: string;
  spectacleType?: string;
}
