import AppHeader, { AppHeaderProps } from "@/components/App/AppHeader";

const DealHeader = (props: AppHeaderProps) => {
  const { title, link } = props;
  return <AppHeader title={title} link={link} />;
};

export default DealHeader;
