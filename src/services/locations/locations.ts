import { instance } from "../instance/instance";

export interface LocationResponse {
  id: number;
  name: string;
  type: string;
  dimension:string;
  results: [];
}

export const getLocation = async (): Promise<LocationResponse> => {
  const response = await instance.get(`/location`);
  return response.data;
}

