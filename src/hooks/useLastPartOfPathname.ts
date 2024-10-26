import { useLocation } from "react-router";

const useLastPartOfPathname = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/");
  const pathname = pathnames[pathnames.length - 1];
  return pathname.toLowerCase() == "dashboard" ? "Home" : pathname;
};

export default useLastPartOfPathname;
