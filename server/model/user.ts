export enum UserType {
    stylist = 0,
    customer = 1
}

export type User = {
    email: string,
    displayName: string,
    userType: UserType
}