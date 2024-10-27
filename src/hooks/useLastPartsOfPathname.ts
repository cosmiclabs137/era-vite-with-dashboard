import { useLocation } from "react-router";

const useLastPartsOfPathname = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").slice(1);
  return pathnames;
  // const pathname = pathnames[pathnames.length - 1];
  // return pathname.toLowerCase() == "dashboard" ? "Home" : pathname;
};

export default useLastPartsOfPathname;
