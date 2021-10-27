import { BaseHttpException } from '../../../../application/http/BaseHttpException'

export class MailNotSentException extends BaseHttpException {
    constructor() {
        super(500, 'Server error. Mail not sent.')
    }
}
