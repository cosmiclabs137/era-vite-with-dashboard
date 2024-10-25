import { Container, Typography } from "@mui/material";
import { Navigate, useRouteError } from "react-router";

import Link from "@/components/common/Link";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Container maxWidth="sm" sx={{ mt: "15rem" }}>
      <Typography variant="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>
        <em>{error.statusText || error.message}</em>
      </Typography>
      <Typography sx={{ mt: 5 }}>
        <Link to="..">Go Home</Link> or{" "}
        <Link to="/dashboard">Go to the Dashboard</Link>
      </Typography>
    </Container>
  );
}
