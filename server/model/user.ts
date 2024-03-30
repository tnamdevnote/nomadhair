export enum UserType {
    stylist = 0,
    customer = 1
}

export type User = {
    token: string,
    email: string,
    displayName: string,
    userType: UserType
}