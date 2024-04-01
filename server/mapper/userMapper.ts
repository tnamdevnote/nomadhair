import { User, UserType } from "../model/user";

export function mapUser(response: any, userType: UserType) {
    const result: User = {
        displayName: response.user.displayName,
        email: response.user.email,
        userType: userType
    }
    return result;
}