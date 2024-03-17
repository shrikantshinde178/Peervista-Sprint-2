export class ApplicationCart{
    constructor(
        public id : number,
        public claimDate: Date,
        public user_id : number,
        public policy_id : number,
        public policy_Name: string,
        public premium_Amount: number,
        public coverage_Description: string,
        public coverageAmount : number,
        public ptm : number,
        public paymentFrequency: string
      ){}

}