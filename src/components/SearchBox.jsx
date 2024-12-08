import { MDBInput } from "mdb-react-ui-kit";
import React from "react";

const SearchBox = ({ label, searchValue, setSearchValue }) => {
  return (
    <MDBInput
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      placeholder={label}
      label={label}
    />
  );
};

export default SearchBox;
