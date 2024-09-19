import { Outlet } from "react-router-dom";
import FooterComponent from "../components/molecules/footer/footer.component";
import NavBarComponent from "../components/molecules/navbar/navbar.component";

export default function Root() {
    return (
      <>
        <NavBarComponent />
        <Outlet />
        <FooterComponent />
      </>
    );
  }
