enum UserType {
    stylist = 0,
    customer = 1
}

export type UserObject = {
    token: string,
    email: string,
    displayName: string,
    userType: UserType
}