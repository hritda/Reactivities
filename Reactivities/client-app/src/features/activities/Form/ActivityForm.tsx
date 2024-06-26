import React, { ChangeEvent, act, useEffect, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {v4 as uuid} from 'uuid';
export const ActivityForm = observer(() => {
  const { activityStore } = useStore();
  const { selectedActivity, createActivity, updateActivity, loading, loadActivity,loadingInitial } =
    activityStore;
    const navigate = useNavigate();
    const {id} = useParams();
  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
  
  if(id) loadActivity(id).then(activity => setActivity(activity!));
    
  }, [id, loadActivity])
  
  function handleSubmit() {
    if(!activity.id){
      activity.id = uuid();
      createActivity(activity).then(()=>navigate(`/activities/${activity.id}`));
    } else {
      updateActivity(activity).then(()=>navigate(`/activities/${activity.id}`));
    }
    
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }
  if(loadingInitial) return <LoadingComponent content='Loading activity...'/>
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          value={activity.title}
          name="title"
          onChange={handleInputChange}
          placeholder="title"
        />
        <Form.TextArea
          value={activity.description}
          name="description"
          onChange={handleInputChange}
          placeholder="Description"
        />
        <Form.Input
          value={activity.category}
          name="category"
          onChange={handleInputChange}
          placeholder="Category"
        />
        <Form.Input
          type="date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
          placeholder="Date"
        />
        <Form.Input
          value={activity.city}
          name="city"
          onChange={handleInputChange}
          placeholder="City"
        />
        <Form.Input
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
          placeholder="Venue"
        />
        <Button loading={loading} floated="right" positive content="Submit" />
        <Button as = {Link} to="/activities" floated="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  );
});
