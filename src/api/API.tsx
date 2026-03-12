import type { Photo } from "../types/CommonTypes";

export const getPhotos = async(pageNumber: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=20`)
    const data: Photo[] = await response.json();
    return data;
};