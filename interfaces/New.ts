export interface New {
    id: number,
    name: string,
    text: string,
    status: string
}

export enum NewStatus {
    published = 'published',
    unpublished = 'unpublished',
}