import React from 'react';
import { Label } from 'react-bootstrap';
import { shallow } from 'enzyme'
import PatientSearch from '../PatientSearch';


it('renders without crashing', () => {
  shallow(<PatientSearch/>)
});

it('renders header', () => {
  const patientSearch = shallow(<PatientSearch/>);
  expect(patientSearch.contains(<h3><Label>Patient Search</Label></h3>)).toEqual(true);
});
