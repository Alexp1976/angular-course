export interface UserTask {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string,
}

export interface NewUserTask {
    title: string,
    summary: string,
    dueDate: string,
}
