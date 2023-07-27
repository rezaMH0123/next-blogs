import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import routerPush from "@/utils/routerPush";
const PaginationComponent = ({ totalpage, page }) => {
  const router = useRouter();
  const handleChange = (event, page) => {
    router.query.page = page;
    routerPush(router);
  };
  return (
    <>
      {totalpage > 1 && (
        <Pagination
          count={totalpage}
          page={page}
          color="primary"
          dir="ltr"
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default PaginationComponent;
