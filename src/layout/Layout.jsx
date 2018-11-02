import React from 'react';
import {BasicLayout} from '@openmrs/react-components';
import LeftRail from './LeftRail';
//import logo from "../assets/images/pih_apzu_logo_white.png";
import {IDENTIFIER_TYPES} from '../constants';

const Layout = props => {

  const NAV_MENU_PAGES = {
    '/' : { display : 'Home', icon : 'home'},
    '/patientSearch' : { display : 'Search Patient', icon : 'search'},
    '/demo/queue' : { display : 'My First Queue', icon : 'notes-medical'}
  };

  const USER_MENU_PAGES = {
    '/logout' : { display : 'Logout', icon : 'sign-out-alt' },
  };


  return (
    <BasicLayout
      identifierTypesToDisplay={[IDENTIFIER_TYPES.PRIMARY_IDENTIFIER_TYPE]}  // <--change to the identifiers types to display in the header
      leftRail={<LeftRail/>}
      //logo={logo}     <-- add your logo here
      navMenuPages={NAV_MENU_PAGES}
      userMenuPages={USER_MENU_PAGES}
      {...props}
    />
  );
};

export default Layout;

