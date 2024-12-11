import Grid from "@mui/material/Grid2";
import { useLoaderData, Outlet } from "react-router";

import AppHeader from "@/components/App/AppHeader";
import { AddFab } from "@/components/common/FloatingActionButtons";

import DealCard from "@/deals/components/DealCard";

import { Deal } from "@/deals/lib/definitions";

const DealIndex = () => {
  const deals: Deal[] = useLoaderData() as Deal[];

  const handleClick = () => {
    alert("Created new deal!");
  };

  return (
    <>
      <AppHeader title="Deals" />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 3 }}>
        {deals.map((deal: Deal) => (
          <Grid key={deal.id} size={1}>
            <DealCard deal={deal} key={deal.id} />
          </Grid>
        ))}
        <Outlet />
      </Grid>
      <AddFab onClick={handleClick} />
    </>
  );
};

export default DealIndex;
