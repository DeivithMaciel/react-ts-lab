export type User = {
    name: string
    email: string
}

export type AuthState = {
    isAuthenticated: boolean
    user: User | null
}