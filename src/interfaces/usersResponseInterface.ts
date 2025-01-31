import { IUser } from "./userInterface";

export interface IUsersResponse {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}