import React from "react";
import {Obs, Section, formValidations, EncounterFormPage, visitActions, selectors } from '@openmrs/react-components';
import { Grid, Row, FormGroup, ControlLabel, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ENCOUNTER_ROLES, ENCOUNTER_TYPES, CONCEPTS } from "../constants";

let MyFirstForm = (props) => {

  const MIN_VALUE_40 = formValidations.minValue(40);
  const MIN_VALUE_50 = formValidations.minValue(50);
  const MAX_VALUE_140 = formValidations.maxValue(140);
  const MAX_VALUE_260 = formValidations.maxValue(260);

  const abnormalMaxValue110 = formValidations.abnormalMaxValue(110);
  const abnormalMaxValue160 = formValidations.abnormalMaxValue(160);

  // update the active visit for the current patient on submit
  const FORM_SUBMITTED_ACTION_CREATORS = [
    () => props.patient && props.patient.uuid && visitActions.fetchPatientActiveVisit(props.patient.uuid)
  ];

  const formContent = (
    <Grid>
      <Section title="Enter Patient Blood Pressure"></Section>
      <Row>
        <Col sm={20} md={20}>
          <span><h1>{ '' }</h1></span>
        </Col>
      </Row>
      <Row>
        <FormGroup controlId="formSystolic">
          <Col componentClass={ControlLabel} sm={4}>
            Systolic Blood Pressure
          </Col>
          <Col sm={2}>
            <Obs
              concept={ CONCEPTS.SystolicBloodPressure }
              placeholder="Systolic value"
              path="systolic"
              validate={[MIN_VALUE_50, MAX_VALUE_260]}
              warn={ abnormalMaxValue160 }
            />
          </Col>
          <Col componentClass={ControlLabel} sm={2}>
            mmHG
          </Col>
        </FormGroup>
      </Row>
      <Row>
        <FormGroup controlId="formDiastolic">
          <Col componentClass={ControlLabel} sm={4}>
            Diastolic Blood Pressure
          </Col>
          <Col sm={2}>
            <Obs
              concept={ CONCEPTS.DiastolicBloodPressure }
              placeholder="Diastolic value"
              validate={[MIN_VALUE_40, MAX_VALUE_140]}
              path="diastolic"
              warn={ abnormalMaxValue110 }
            />
          </Col>
          <Col componentClass={ControlLabel} sm={2}>
            mmHG
          </Col>
        </FormGroup>
      </Row>

    </Grid>
  );

  return (
    <EncounterFormPage
      encounterRole={ENCOUNTER_ROLES.UnknownEncounterRole}
      encounterType={ENCOUNTER_TYPES.VitalsEncounterType}
      formContent={formContent}
      formId="my-first-form"
      formSubmittedActionCreators={FORM_SUBMITTED_ACTION_CREATORS}
      title="My First Form"
      toastMessage="My First Form Saved"
    />
  );

};

const mapStateToProps = (state) => {
  return {
    patient: selectors.getSelectedPatientFromStore(state)
  };
};

export default connect(mapStateToProps)(MyFirstForm);

