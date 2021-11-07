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