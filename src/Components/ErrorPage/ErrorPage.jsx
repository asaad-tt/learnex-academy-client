import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div className="d-flex flex-column  justify-center align-items-center">
        <h1 className="text-4xl fw-semibold text-warning">
          Its an Error! try again
        </h1>
        <br />
        {error && (
          <div>
            <p className="text-danger fs-3">
              {error.statusText || error.message}
            </p>
            <p className="fs-1">{error.status}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ErrorPage;
