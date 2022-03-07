import { Actions } from "../actions";
import { Role } from "./Role";

export class User {

    private static instance: User;
    private constructor(){ }

    public role: string = ''


    public static getInstance(): User {
        if(!User.instance) {
            User.instance = new User()
        }
        return User.instance
    }

    static can(action: Actions) {
        const role = Role.getRole(User.getInstance().role);
        return role.actions.includes(action)
    }

    static setRole(role: string) {
        const allRoles = Role.getRoles();
        if(!allRoles.includes(role)) {
            throw new Error('Role doesn\'t exist')
        }
        User.instance.role = role;
    }
}