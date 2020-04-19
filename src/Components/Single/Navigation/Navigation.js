import React, { Fragment } from "react";
import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Fragment>
      <Nav bg="light" className="justify-content-end" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home" className="text-white">Sign Out</Nav.Link>
        </Nav.Item>
      </Nav>
    </Fragment>
  );
};

export default Navigation;