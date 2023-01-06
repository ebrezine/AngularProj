export class viewClaim{
    constructor(
        public claim_id: number,
        public status: string,
        public user_id: string,
        public description: string,
        public pending: boolean,
        public amount: number
        ){}
}