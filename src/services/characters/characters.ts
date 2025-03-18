import { instance } from "../instance/instance";

export interface CharacterResponse {
  info: any;
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

export const getAllCharacters = async (page: number =1): Promise<CharacterResponse> => {
  const response = await instance.get(`/character?page=${page}`);
  return response.data;
}

export const getCharacter = async (id: string): Promise<CharacterResponse> => {
  const response = await instance.get(`/character/${id}`);
  return response.data;

}