import { Button } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

export const SobreNosotros = () => {
  return (
    <React.Fragment>

      <Container className="divSobreNosotros">
      <div className="divImg col-10 col-sm-8 col-lg-6">
            <img
              src="./img/img_about.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="divTextAbout col-lg-6">
            <h2 className="mb-3">Sportclub</h2>
            <p>
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button className="btnAbout" variant="contained">Saber más</Button>
            </div>
          </div>
      </Container>

    </React.Fragment>
  );
};
