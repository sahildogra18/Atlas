import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
  let error = useRouteError();
  console.log(error.error.message);

  return (
    <div>
      <h1>{error.error.message}</h1>
      <NavLink to={"/"}>
        <button>Go Home</button>
      </NavLink>
    </div>
  );
}

export default ErrorPage;
