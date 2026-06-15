export interface AudioData {
    title: string;
    artist: string;
    audioUrl: string;
}

export interface VideoData {
    id: string;
    videoUrl: string;
    authorName: string;
    authorImg: string;
    description: string;
    likesCount: number;
    isLiked?: boolean;
    audio?: AudioData;
}
