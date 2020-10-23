export interface dataObject {
[index: string]: unknown
}

export interface ControllerResponse {
    status: number,
    data?: dataObject,
    message?: string,
    success?: boolean
}
