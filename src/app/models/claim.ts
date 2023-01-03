export class Claim{
    constructor(
        public createdBy: string,
        public pending: boolean,
        public description: string,
        public status: string
    ){}
}