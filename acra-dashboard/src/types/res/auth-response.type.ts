import { Response } from "./response.type";
export interface AuthResponse<T> extends Response<T> {
    token: string
}