import React from 'react';
import {TaskList, patientObjByEncounterTypeFilter} from '@openmrs/react-components';
import { ENCOUNTER_TYPES } from "../constants";

let LeftRail = props => {

  const TASK_GROUP = [
    {
      title: "My First Form",
      link: '/demo/form',
      completed: patientObjByEncounterTypeFilter(ENCOUNTER_TYPES.VitalsEncounterType.uuid, 'include'),
    }
  ];

  const TASK_GROUPS = [
    {
      key: 1,
      title: <h3>Forms</h3>,
      tasks: TASK_GROUP
    }
  ];

  return (
    <TaskList
      patient={props.patient}
      taskGroups={TASK_GROUPS}
    />
  );

};

export default LeftRail;
