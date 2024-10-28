import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

import { Deal } from "@/lib/definitions";
import ButtonLink from "@/components/common/ButtonLink";

const DealCard = ({ deal }: { deal: Deal }) => {
  const href = `/dashboard/deals/${deal.id}`;
  return (
    <Paper elevation={3} sx={{ w: "100%" }}>
      <Card sx={{ w: "100%", p: 2 }} variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {/* NOTE: maybe make the ID viewable on hover instead? something else? */}
            {deal.name} (ID: {deal.id})
          </Typography>
          <Divider variant="fullWidth" sx={{ m: 1 }} />
          <Typography>Proposals: {deal.proposals.length}</Typography>
        </CardContent>
        <CardActions>
          <ButtonLink href={href} sx={{ mt: 2 }}>
            View Deal
          </ButtonLink>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default DealCard;
