import React from 'react';
import { Label } from 'react-bootstrap';
import {PatientSearch} from '@openmrs/react-components';
import { push } from 'connected-react-router';

let SearchPatient = (props) => {
  return (
    <div>
      <h3><Label>Patient Search</Label></h3>
      <PatientSearch
        rowSelectedActionCreators={[
          () => push('/demo/form')
        ]}
      />
    </div>
  );
};

export default SearchPatient;
