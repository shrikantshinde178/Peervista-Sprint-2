export class InsurancePolicy {
  constructor(
    public id: number,
    public policyName: string,
    public coverageAmount: number,
    public creditScoreRequirement: number,
    public incomeRequirement: number,
    public policyTermMonths: number,
    public policyCoverageDescription: string,
    public premiumAmount: number,
    public premiumPaymentFrequency: string,
    public user: User, // Assuming you have a User interface/model
    public insuranceProvider: InsuranceProvider,
    ){}
}
  
  export interface User {
    userId: number;
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    address?: string;
    phoneNumber: string;
    policies?: InsurancePolicy[]; 
  }
  
  // Define the InsuranceProvider interface.
  export interface InsuranceProvider {
    providerId: number;
    providerName: string;
    email: string;
    password: string;
    phoneNumber?: string;
    address?: string;
    policies?: InsurancePolicy[];
  }
  
