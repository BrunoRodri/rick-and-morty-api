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
  origin:{
    name: string;
    url: string;
  }
  episode:[];
  results:[];
}

export const getAllCharacters = async (): Promise<CharacterResponse> => {
  const response = await instance.get(`/character`);
  return response.data;
}

export const getCharacter = async (id: string): Promise<CharacterResponse> => {
  const response = await instance.get(`/character/${id}`);
  return response.data;

}