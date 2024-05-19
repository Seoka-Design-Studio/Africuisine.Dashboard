import { BaseResponse } from "./base-response.type";

export interface Response<T> extends BaseResponse {
    data: T
}