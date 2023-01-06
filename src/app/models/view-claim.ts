export class viewClaim{
    constructor(
        public id: number,
        public stat: string,
        public created_by: string,
        public description: string,
        public isPending: boolean,
        public amount: number
        ){}
}