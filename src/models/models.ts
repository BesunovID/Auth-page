export interface IUser {
    id: number
    name: string
    email: string
    password: string
    role: UserRole
}

export enum UserRole {
    admin = 'admin',
    moder = 'moderator',
    user = 'user',
}