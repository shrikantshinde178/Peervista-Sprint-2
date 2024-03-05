import { InsuranceProvider, User } from "./app/Entity";

export class InsurancePolicy{
 
  constructor(public id: number, 
            public policyName: string,
           public creditScoreRequirement: number,
           public incomeRequirement: number,
           public policyTermMonths: number,
           public policyCoverageDescription: string,
           public premiumAmount: number,
           public premiumPaymentFrequency: string,
           public user: User,// Assuming you have a User interface/model
           public insuranceProvider: InsuranceProvider){}
          }
          
        
    