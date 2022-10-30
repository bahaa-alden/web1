export interface state {
  loading: boolean;
  error: boolean;
  post: any;
}
export interface action {
  type: string;
  paylod?: string;
}

export interface actions {
  type: string;
  paylod: any;
}
export interface ss {
  title: string;
  desc: string;
  price: number;
  category: string;
  tags: string[];
  images: {
    sm: string;
    md: string;
    lg: string;
  };
  quantity: number;
}
