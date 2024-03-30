import { UserObject, UserType } from "../model/userObject";

export function mapUser(response: any, userType: UserType) {
    const result:UserObject = {
        displayName: response.user.displayName,
        email: response.user.email,
        userType: userType
    }
    return result;
}