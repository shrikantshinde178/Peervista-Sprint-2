export class policyCart{

    constructor(
    public policyId: number,
    public policy_name: string,
    public coverageAmount: number,
    public policyTermMonths: number,
    public policyCoverageDescription: string,
    public eligibilityRequirements: string,
    public premiumPaymentFrequency: string,
    public premiumAmount: number,
    public creditScoreRequirement: number,
    public incomeRequirement: number
    ){}
}