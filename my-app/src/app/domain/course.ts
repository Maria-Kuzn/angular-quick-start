export interface NewCourse {
    title: string;
    creationDate: Date;
    duration: number;
    description?: string;
}

export interface Course extends NewCourse {
    id: number;
    topRated: boolean;
}