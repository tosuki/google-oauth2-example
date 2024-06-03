import { User } from "./User"

export type Session = Omit<User, "password" | "id"> & {
    token: string
    
    issuedAt: number
    updatedAt: number
}
