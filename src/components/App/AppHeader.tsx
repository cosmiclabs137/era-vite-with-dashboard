import { Stack, Typography } from "@mui/material";

import Link from "@/components/common/Link";

interface AppHeaderLinkProps {
  href?: string;
  text?: string;
}

interface AppHeaderProps {
  title: string;
  link?: AppHeaderLinkProps;
}

export { type AppHeaderProps, type AppHeaderLinkProps };

const AppHeader = (props: AppHeaderProps) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ mb: 2, flexWrap: "wrap", alignItems: "flex-end" }}
      useFlexGap
    >
      <Typography variant="h2">{props.title}</Typography>
      <AppHeaderLink href={props?.link?.href} text={props?.link?.text} />
    </Stack>
  );
};

interface AppHeaderLinkProps {
  href?: string;
  text?: string;
}

const AppHeaderLink = (props: AppHeaderLinkProps) => {
  const { href, text } = props;

  if (!(href && text)) return null;

  console.log(props);
  return (
    <Typography>
      <Link to={href}>{text}</Link>
    </Typography>
  );
};

export default AppHeader;
