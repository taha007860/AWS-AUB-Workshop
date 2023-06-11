export interface PostDTO {
    id: string;
    text: string;
    author: string;
    title: string;
    link?: LinkDTO;
    picture?: LinkDTO;
}

export interface LinkDTO {
    url: string;
    title: string;
}
 