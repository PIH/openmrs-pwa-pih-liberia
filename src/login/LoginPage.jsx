import React from 'react';
import PropTypes from 'prop-types';
import {LoginPage as ReactComponentsLoginPage} from '@openmrs/react-components';
//import homeImage from "../assets/images/Magaleta_IC3_clinic.jpg";
//import logo from "../assets/images/pih_apzu_logo_white.png";


const LoginPage = props => {
  return (
    <ReactComponentsLoginPage
//    homeImage={homeImage}                 <--- Add your home page backgroup image here
      location={props.location}
  //    logo={logo}                         <-- Add your logo here
    />
  );
};

LoginPage.propTypes = {
  location: PropTypes.object.isRequired,
};


export default LoginPage;


