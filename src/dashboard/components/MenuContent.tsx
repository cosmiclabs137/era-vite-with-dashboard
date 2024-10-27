import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { capitalize } from "@mui/material";

import Link from "@/components/common/Link";
import useLastPartsOfPathname from "@/hooks/useLastPartsOfPathname";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, path: "" },
  { text: "Deals", icon: <CorporateFareIcon />, path: "deals" },
  { text: "Clients", icon: <PeopleRoundedIcon />, path: "" },
  // { text: "Tasks", icon: <AssignmentRoundedIcon /> },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },
  { text: "About", icon: <InfoRoundedIcon /> },
  { text: "Feedback", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const pathnames = useLastPartsOfPathname();
  let pathname = pathnames[pathnames.length - 1];
  pathname = pathname ? capitalize(pathname) : pathname;

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton selected={item.text === pathname}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Link
                to={item.path}
                sx={{ color: "theme.primary" }}
                underline="none"
              >
                <ListItemText primary={item.text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
