
export interface ProductModule {
  id?: number; // optional for new product creation

  name: string;

  description: string;

  price: number;

  images: string[]; // list of image URLs or paths

  type: string; // e.g., "watch", "shirt", "mobile", etc.

  createdAt?: Date;
  updatedAt?: Date;

  // Optional: Admin-related (if you're associating products with admins)
  adminUserId?: string;
}


