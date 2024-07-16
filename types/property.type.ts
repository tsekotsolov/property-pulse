
export interface PropertyLocation {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

export interface SellerInfo {
  name: string;
  email: string;
  phone: string;
};

export interface Property  {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: PropertyLocation;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    nightly?: number;
    weekly: number;
    monthly?: number;
  };
  seller_info: SellerInfo;
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
};