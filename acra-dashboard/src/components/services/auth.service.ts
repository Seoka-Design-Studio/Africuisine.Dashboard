import axios, { AxiosResponse } from "axios";
import { Login } from "../types/sign-in.type";
import { AuthResponse } from "../types/res/auth-response.type";
import { User } from "../types/users.type";

export class AuthService {
    private endpoint: string = 'https://localhost:7083/api'

    async signInWithUserNameAndPassword(body: Login) {
        const response = await axios.post(`${this.endpoint}/auth/`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        return response.data
    }
}