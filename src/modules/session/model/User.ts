export type User = {
    id: number
    email: string //@unique

    password?: string

    createdAt: number
    updatedAt: number
}
