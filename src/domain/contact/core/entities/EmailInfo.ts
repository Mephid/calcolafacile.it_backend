export class EmailInfo {
    public senderName: string

    constructor(
        public senderEmail: string,
        public subject: string,
        public content: string,
        name?: string
    ) {
        this.senderName = name || this.generateSenderMail()
    }

    private generateSenderMail(): string {
        return this.senderEmail.match(/.+?(?=@)/)?.toString() || 'User'
    }
}
