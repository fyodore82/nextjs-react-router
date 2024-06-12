import { Link, Outlet } from "react-router-dom";

const MainPage = (props: any) => {
  console.log('main page props ', props)
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
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/red-page" className="[&.active]:font-bold">
          Red Page
        </Link>
        <Link to="/blue-page" className="[&.active]:font-bold">
          Blue Page
        </Link>
        <Link to="/green-page" className="[&.active]:font-bold">
          Green Page
        </Link>
        <Link to="/non-existing-page" className="[&.active]:font-bold">
          Non Existing Page
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MainPage;
