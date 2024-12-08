import { MDBInput } from 'mdb-react-ui-kit';
import React from 'react';

const SearchBox = ({ label, searchValue, setSearchValue }) => {
    return (
            <MDBInput
                className='form-control'
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder='Escribe para realizar busqueda...'
                label={label}
            />
    );
};

export default SearchBox;