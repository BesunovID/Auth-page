export interface IUser {
    id: number
    name: string
    email: string
    password: string
    role: string
}

export interface ISelect {
    options: Option[]
    selected: Option | null
    isOpen: boolean
}

type Option = {
    title: string
    value: string
}

export type ParticlesDots = {
    size: number
    x: number
    y: number
    deg: number
}