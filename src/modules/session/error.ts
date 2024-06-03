export type AuthenticationErrorCodes =
    "invalid_credentials" | 
    "unhanlded" |
    "email_taken"

export class AuthenticationError {
    public code: AuthenticationErrorCodes
    public message: string
    public rawError?: any

    public isAuthError: boolean = true

    constructor(code: AuthenticationErrorCodes, message: string, raw: any) {
        this.code = code
        this.message = message
        this.rawError = raw
    }
}

export const isAuthError = (error: any): error is AuthenticationError => {
    return !!error.isAuthError
}
