import { InsurancePolicy } from '../app/InsurancePolicy';
import { User } from './User';

export class PolicyApplications {
  constructor(
    public id: number,
    public applicationDate: Date,
    public user: User,
    public inCart: boolean,
    public policy: InsurancePolicy
  ) {}
}
