import Headers from "./Ui/Headers";
import Footers from "./Ui/Footers";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footers />
    </div>
  );
}

export default AppLayout;
