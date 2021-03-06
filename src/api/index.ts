import { get } from './axios'

export interface AlbumsProps {
    id: number;
    pic: string;
    title: string;
    username: string
}
export interface SlidersProps {
    id: string;
    link: string;
    pic: string;
}
export interface RecommendProps {
    code: number;
    result: {
        albums: AlbumsProps[];
        sliders: SlidersProps[];
    }
}
export const getRecommend = (): Promise<RecommendProps> => {
   return get<RecommendProps>('/api/getRecommend', {})
}

type SingersIndex = '热'| 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z'
export interface SingersList {
    id: number;
    mid: string;
    name: string;
    pic: string; 
}
export interface SingersProps {
    title: SingersIndex,
    list: SingersList[]
}
export interface SingerProps {
    code: number,
    result: {
        singers: SingersProps[]
    }
}
export interface Singer {
    id: number;
    mid: string;
    name: string;
    pic: string;
    singer?: string;
  }
export const getSinger = (): Promise<SingerProps> => {
    return get<SingerProps>('/api/getSingerList', {})
}


export function getSingerList() {
    return get('/api/getSingerList')
}

interface SingerDetail {
    code: number,
    result: {
        songs: {
            album: string
            duration: number
            id: number
            mid: string
            name: string
            pic: string
            singer: string
            url: string
        }[]
    }
}
export const getSingerDetail = (params: {mid: string}): Promise<SingerDetail> => {
    return get('/api/getSingerDetail', params)
}

export const getSongsUrl = (params: {mid: string[]}) => {
    return get('/api/getSongsUrl', params)
}