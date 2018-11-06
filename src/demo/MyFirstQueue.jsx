import React from "react";
import {
  patientActions,
  visitActions,
  List,
  patientObjByEncounterTypeFilter,
  selectors,
  patientUtil
} from '@openmrs/react-components';
import { ENCOUNTER_TYPES } from '../constants';
import {connect} from "react-redux";
import { push } from 'connected-react-router';


let MyFirstQueue = props => {

  const COLUMN_DEFS = [
    { headerName: 'uuid', hide: true, field: 'uuid' },
    {
      headerName: 'ID',
      cellRenderer: function(params){
        return patientUtil.getPreferredIdentifier(params.data)
      },
      getQuickFilterText: function(params) {
        return patientUtil.getPreferredIdentifier(params.data)
      }
    },
    { headerName: 'Given Name', field: 'name.givenName' },
    { headerName: 'Family Name', field: 'name.familyName' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Age', field: 'age' }
  ];

  const FETCH_LIST_ACTION_CREATOR =
    () => {
      if (!props.updating) {
        props.dispatch(visitActions.fetchActiveVisits((props.session.sessionLocation ? props.session.sessionLocation.uuid : null)));
      }
    };

  const ON_MOUNT_OTHER_ACTION_CREATOR = [
      () => props.dispatch(patientActions.clearSelectedPatient())
  ];

  const ROW_SELECTED_ACTION_CREATORS = [
    patientActions.setSelectedPatient,
    () => push('/demo/form')
  ];

  const FILTERS = [
    (patient) => (patient.visit),  // only patients that have an active visit
    patientObjByEncounterTypeFilter(ENCOUNTER_TYPES.VitalsEncounterType.uuid, 'exclude')
  ];

  return (
    <div>
      <List
        columnDefs={COLUMN_DEFS}
        fetchListActionCreator={FETCH_LIST_ACTION_CREATOR}
        filters={FILTERS}
        loading={props.updating}
        onMountOtherActionCreators={ON_MOUNT_OTHER_ACTION_CREATOR}
        rowData={ Object.values(props.patients) }
        rowSelectedActionCreators={ROW_SELECTED_ACTION_CREATORS}
        title="My First Queue"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    patients: selectors.getPatientStore(state),
    session: state.openmrs.session,
    updating: selectors.isPatientStoreUpdating(state)
  };
};

export default connect(mapStateToProps)(MyFirstQueue);
