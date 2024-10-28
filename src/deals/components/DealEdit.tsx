// import React from "react";
// import { Box, Divider, Stack, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import { useLoaderData } from "react-router";

// import ProposalsInputsWrapper from "@/components/Proposals/ProposalsInputsWrapper";
// import Link from "@/components/common/Link";
// import { Deal } from "@/lib/definitions";

// const DealHeader = ({ deal }: { deal: Deal }) => {
//   return (
//     <Stack
//       direction="row"
//       spacing={2}
//       sx={{ mb: 2, flexWrap: "wrap", alignItems: "flex-end" }}
//       useFlexGap
//     >
//       <Typography variant="h2">{deal.name}</Typography>
//       <Typography>
//         <Link to={`/dashboard/deals/${deal.id}`}>Back</Link>
//       </Typography>
//     </Stack>
//   );
// };

// const DealEdit = () => {
//   const deal = useLoaderData() as Deal;
//   return (
//     <div style={{ width: "100%" }}>
//       <DealHeader deal={deal} />
//       <Divider />
//       <Grid container spacing={{ xs: 2, md: 3 }}>
//         <Typography variant="h4">Proposals:</Typography>
//         <Grid container sx={{ flexGrow: 0, mt: 5 }}>
//           <ProposalsInputsWrapper proposals={deal.proposals} />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default DealEdit;
