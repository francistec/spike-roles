import { Roles } from "../roles";


export class Role {

    public constructor() { }

    static getRoles() {
        return Roles.map(r => r.name)
    }

    static getRole(desiredRole: string) {
        const [role] = Roles.filter(r => r.name === desiredRole)
        return role
    }
}