import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
const ActivityDetails = () => {
  const {activityStore} = useStore();
  const {selectedActivity:activity, openForm, cancelSelectedActivity} = activityStore ;

  if(!activity) return <LoadingComponent /> ;
  return (
    <Card fluid>
      <Image src={`/assets/CategoryImages/${activity.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths="2">
          <Button onClick = {()=>openForm(activity.id)}basic content="Edit" color="blue" />
          <Button
            basic
            onClick={cancelSelectedActivity}
            content="Cancel"
            color="grey"
          />
        </Button.Group>
      </CardContent>
    </Card>
  );
};

export default ActivityDetails;
