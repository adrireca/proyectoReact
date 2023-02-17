import React from "react";

export const Heroe = () => {
  return (
    <React.Fragment>
      <div className="divHeroe bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">En nuestro Club Deportivo zonas de ocio, relax y mucho más…</h1>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Regístrate
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
