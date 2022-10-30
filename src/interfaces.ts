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
  paylod: {
    name: string;
    value: string;
  };
}
