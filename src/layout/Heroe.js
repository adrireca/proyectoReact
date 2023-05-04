import { Button } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

export const Heroe = () => {
  return (
    <React.Fragment>
      <div className="divHeroe text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h3 className="display-5 text-white">En nuestro Club Deportivo zonas de ocio, relax y mucho más…</h3>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to={'/signup'}>
                <Button className="btnHeroe" variant="outlined" size="large" endIcon={<ArrowForwardIosIcon/>}>Regístrate</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
