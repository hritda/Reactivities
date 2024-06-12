import React from "react";
import { Grid} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import { ActivityForm } from "../Form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode : boolean;
  openForm: (id:string)=>void ;
  createOrEdit : (activity: Activity) => void ;
  closeForm: ()=>void;
  deleteActivity:(id:string)=>void 
}
const ActivityDashBoard = ({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  deleteActivity,
  createOrEdit,
  openForm,
  closeForm
}: Props) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList deleteActivity={deleteActivity} activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && (
          <ActivityDetails
            cancelSelectActivity={cancelSelectActivity}
            activity={selectedActivity}
            openForm = {openForm}
          />
        )}
        {editMode && 
        <ActivityForm createOrEdit={createOrEdit} activity={selectedActivity} closeForm={closeForm} />}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashBoard;
