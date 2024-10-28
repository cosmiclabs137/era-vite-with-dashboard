import Grid from "@mui/material/Grid2";
import { useLoaderData, Outlet } from "react-router";

import AppHeader from "@/components/App/AppHeader";
import DealCard from "./DealCard";

import { Deal } from "@/lib/definitions";

const DealIndex = () => {
  const deals: Deal[] = useLoaderData() as Deal[];

  return (
    <>
      <AppHeader title="Deals" />
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {deals.map((deal: Deal) => (
          <Grid key={deal.id}>
            <DealCard deal={deal} key={deal.id} />
          </Grid>
        ))}
        <Outlet />
      </Grid>
    </>
  );
};

export default DealIndex;
