import { Link, NavLink, Outlet } from "react-router-dom";

const MainPage = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        fontSize: "16px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          fontSize: "25px",
        }}
      >
        Main Page
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          fontSize: "20px",
          gap: "20px",
        }}
      >
        <NavLink to="/nextjs-react-router" end className="[&.active]:font-bold">
          Home
        </NavLink>
        <NavLink to="red-page" className="[&.active]:font-bold">
          Red Page
        </NavLink>
        <NavLink to="blue-page" className="[&.active]:font-bold">
          Blue Page
        </NavLink>
        <NavLink to="green-page" className="[&.active]:font-bold">
          Green Page
        </NavLink>
        <NavLink to="non-existing-page" className="[&.active]:font-bold">
          Non Existing Page
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MainPage;
