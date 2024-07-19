import { instance } from "../instance/instance";

export interface LocationResponse {
  id: number;
  name: string;
  type: string;
  dimension:string;
  residents:[];
  results: [];
}

export const getAllLocation = async (): Promise<LocationResponse> => {
  const response = await instance.get(`/location`);
  return response.data;
}

export const getLocation = async (id: string): Promise<LocationResponse> => {
  const response = await instance.get(`/location/${id}`);
  return response.data;
}

