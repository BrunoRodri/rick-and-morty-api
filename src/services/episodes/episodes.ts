import { instance } from "../instance/instance";

export interface EpisodeResponse {
  info: any;
  id: number;
  name: string;
  air_date: string;
  episode: string;
  url: string;
  characters: [];
  results:[];
}


export const getAllEpisodes = async (page: number =1): Promise<EpisodeResponse> => {
  const response = await instance.get(`/episode?page=${page}`);
  return response.data;
}

export const getEpisode = async (id: string): Promise<EpisodeResponse> => {
  const response = await instance.get(`/episode/${id}`);
  return response.data;
}