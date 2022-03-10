export class ResponseContent<T>{
    status: number
    content: string|T
    contentType: string

    constructor(
        status: number,
        content: string|T,
        contentType: string){
            this.status = status
            this.content = content
            this.contentType = contentType
        }
}