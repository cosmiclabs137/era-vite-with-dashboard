import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Proposal } from "@/deals/lib/definitions";

const key_to_text_map: Record<string, string> = {
  id: "ID",
  name: "Name",
  sqft: "SQFT",
  term: "Term",
  baseRent: "Base Rent",
  annualEscalations: "Annual escalations",
  opExPerMonthRsf: "OpEx / Mo (RSF)",
  globalInflation: "Inflation",
  otherOneTimeLandlordCost: "Other one-time landloard cost",
  otherOneTimeTenantCost: "Other one-time tenant cost",
  otherMonthlyLandlordCost: "Other monthly landlord cost",
  otherMonthlyTenantCost: "Other monthly tenant cost",
  monthsFreeRent: "Mos. free rent",
  commissionFirst: "Commision (mos. 1 - 60)",
  commissionSecond: "Commision (mos. 61+)",
  tenantDiscountRate: "Tenant discount rate",
  tiCostPerRsf: "TI cost (per RSF)",
  tiAllowancePerRsf: "TI allowance (per RSF)",
  landlordDiscountRate: "Landlord discount rate",
};

interface ProposalCardProps {
  proposal: Proposal;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "30%", p: 2 }}
      elevation={1}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="h6" align="center">
                {proposal.name}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(proposal).map(
            ([key, value]: [string, string | number]) =>
              key !== "id" && key !== "name" ? (
                <TableRow key={key} sx={{ p: 0, m: 0 }}>
                  <TableCell sx={{ p: 0.2, m: 0.3 }}>
                    {key_to_text_map[key]}
                  </TableCell>
                  <TableCell sx={{ p: 0.2, m: 0.3 }}>{value}</TableCell>
                </TableRow>
              ) : null
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProposalCard;
