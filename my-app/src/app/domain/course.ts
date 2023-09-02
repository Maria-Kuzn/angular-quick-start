export interface Course {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description?: string;
    topRated: boolean;
}

export interface NewCourse {
    title: string;
    creationDate: Date;
    duration: number;
    description?: string;
    topRated?: boolean;
}