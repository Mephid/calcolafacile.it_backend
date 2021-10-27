export abstract class BaseHttpException extends Error {
    constructor(public status: number, public message: string) {
        super(message)
    }
}
