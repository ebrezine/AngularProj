export class viewClaim{
    constructor(
        public claim_id: number,
        public status: string,
        public created_by: string,
        public description: string,
        public pending: boolean,
        public amount: number
        ){}
}