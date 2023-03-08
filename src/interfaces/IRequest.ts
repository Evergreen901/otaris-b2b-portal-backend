export interface IRequest {
    name: string;
    email: string;
    project: string;
    original: object;
    hidden?: Date;
}