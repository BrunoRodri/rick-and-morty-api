import { instance } from "../instance/instance";

export interface LocationResponse {
  info: any;
  id: number;
  name: string;
  type: string;
  dimension:string;
  residents:[];
  results: [];
}

export const getAllLocation = async (page: number =1): Promise<LocationResponse> => {
  const response = await instance.get(`/location?page=${page}`);
  return response.data;
}

export const getLocation = async (id: string): Promise<LocationResponse> => {
  const response = await instance.get(`/location/${id}`);
  return response.data;
}

