export type Proposal = {
  id: string;
  name: string;
  sqft: number;
  term: number;
  baseRent: number;
  annualEscalations: number;
  opExPerMonthRsf: number;
  globalInflation: number;
  otherOneTimeLandlordCost: number;
  otherOneTimeTenantCost: number;
  otherMonthlyLandlordCost: number;
  otherMonthlyTenantCost: number;
  monthsFreeRent: number;
  commissionFirst: number;
  commissionSecond: number;
  tenantDiscountRate: number;
  tiCostPerRsf: number;
  tiAllowancePerRsf: number;
  landlordDiscountRate: number;
};

export type Deal = {
  id: string;
  proposals: Proposal[];
};
