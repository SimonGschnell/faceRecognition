import React, { Fragment } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const UrlImageSearch = ({ event , buttonEvent}) => {
  return (
    <Fragment>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary" size="lg" onClick={buttonEvent}>Detect</Button>
        </InputGroup.Prepend>
        <FormControl
          style={{height:'auto', backgroundColor: 'transparent', border: '1px solid gray'}}
          placeholder="ImageURL"
          aria-label="ImageURL"
          onChange={event}
        />
      </InputGroup>
    </Fragment>
  );
};

export default UrlImageSearch;
