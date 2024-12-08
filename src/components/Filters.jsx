import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import SearchBox from "components/SearchBox";

const Filters = ({ title, setTitle, year, setYear, type, setType }) => {
  const handleTypeChange = (value) => {
    setType(value);
  };

  return (
    <div className="d-flex align-items-center justify-content-start">
      <div className="me-3">
        <SearchBox
          label="Titulo"
          searchValue={title}
          setSearchValue={setTitle}
        />
      </div>
      <div className="me-3">
        <SearchBox label="Año" searchValue={year} setSearchValue={setYear} />
      </div>
      <div className="me-3">
        <MDBDropdown>
          <MDBDropdownToggle color="primary">
            {type ? (type === "movie" ? "Película" : "Serie") : "Tipo"}
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem link onClick={() => handleTypeChange("")}>
              Tipo
            </MDBDropdownItem>
            <MDBDropdownItem link onClick={() => handleTypeChange("movie")}>
              Película
            </MDBDropdownItem>
            <MDBDropdownItem link onClick={() => handleTypeChange("series")}>
              Serie
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>
    </div>
  );
};

export default Filters;
