import { instance } from "../instance/instance";

export interface CharacterResponse {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  location:{
    name: string;
    url: string;
  };
  results:[];
}

export const getCharacters = async (): Promise<CharacterResponse> => {
  const response = await instance.get(`/character`);
  return response.data;
}