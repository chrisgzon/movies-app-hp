import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const BtnSearch = ({ onClick }) => {
    return (
        <MDBBtn color="primary" onClick={onClick}>
            Buscar
        </MDBBtn>
    );
};

export default BtnSearch;