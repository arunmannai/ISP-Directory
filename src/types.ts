export interface Isp {
  contact_no: string;
  description: string;
  email: string;
  image: string;
  lowest_price: number;
  max_speed: string;
  name: string;
  rating: number;
  url: string;
}

export interface IspResponse {
  isplist: Isp[];
}

interface Counter {
  name: string;
  value: number;
}

export interface ApiHitsResponse {
  update_counters: {
    returning: Counter[];
  };
}
