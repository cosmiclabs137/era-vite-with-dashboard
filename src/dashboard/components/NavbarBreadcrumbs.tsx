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

      {constructBreadcrumbsPath(pathnames).map((elem) => elem)}
    </StyledBreadcrumbs>
  );
}

const formatPathname = (pathname: string): string => {
  let formattedPathname = pathname === "dashboard" ? "home" : pathname;

  return capitalize(formattedPathname);
};

const constructBreadcrumbsPath = (
  pathnames: Array<string>
): Array<React.ReactNode> => {
  if (pathnames.length === 1) {
    return [
      <Typography
        variant="body1"
        sx={{
          color: "text.primary",
          fontWeight: 600,
        }}
      >
        {formatPathname(pathnames[0])}
      </Typography>,
    ];
  }
  const filteredPathnames = pathnames.filter(
    (pathname) => pathname !== "dashboard"
  );
  const length = filteredPathnames.length;
  const formattedPathnames = filteredPathnames.map((pathname, index) => {
    return (
      <Typography
        variant="body1"
        sx={{
          color: index === length - 1 ? "text.primary" : "text.secondary",
          fontWeight: index === length - 1 ? 600 : 400,
        }}
        key={`${pathname}-${index}`}
      >
        {formatPathname(pathname)}
      </Typography>
    );
  });

  return formattedPathnames;
};
