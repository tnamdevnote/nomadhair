export enum UserType {
    stylist = 0,
    customer = 1
}

export type UserObject = {
    email: string,
    displayName: string,
    userType: UserType
}