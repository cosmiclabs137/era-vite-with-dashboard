import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

import useLastPartsOfPathname from "@/hooks/useLastPartsOfPathname";

import { capitalize } from "@mui/material";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    // @ts-ignore
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: "center",
  },
}));

export default function NavbarBreadcrumbs() {
  const pathnames = useLastPartsOfPathname();

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      <Typography variant="body1">Dashboard</Typography>
      {pathnames.map((pathname: string, index: number) => (
        <Typography
          variant="body1"
          sx={{
            color:
              index === pathnames.length - 1
                ? "text.primary"
                : "text.secondary",
            fontWeight: index === pathnames.length - 1 ? 600 : 400,
          }}
          key={pathname}
        >
          {formatPathname(pathname)}
        </Typography>
      ))}
    </StyledBreadcrumbs>
  );
}

const formatPathname = (pathname: string): string => {
  let formattedPathname = pathname === "dashboard" ? "home" : pathname;

  return capitalize(formattedPathname);
};
