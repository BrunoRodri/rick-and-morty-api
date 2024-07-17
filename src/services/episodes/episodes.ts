import { instance } from "../instance/instance";

export interface EpisodeResponse {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  results:[];
}


export const getEpisodes = async (): Promise<EpisodeResponse> => {
  const response = await instance.get(`/episode`);
  return response.data;
}