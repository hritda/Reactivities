import React, { ChangeEvent, act, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from "../../../app/models/activity";
interface Props{
  createOrEdit : (activity: Activity) => void;
  activity : Activity | undefined ;
  closeForm : ()=>void;
  submitting: boolean;
  

}
export const ActivityForm = ({activity: selectedActivity, closeForm, createOrEdit, submitting} : Props) => {
  const initialState = selectedActivity ??  {
    id:'',
    title:'',
    category:'',
    description:'',
    date:'',
    city:'',
    venue:''
  }
  const [activity, setActivity]  = useState(initialState);
  function handleSubmit(){
    console.log(activity);
    createOrEdit(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
   const {name, value} = event.target ;
   setActivity({...activity, [name]: value });

  }
  return (
   <Segment clearing>
    <Form onSubmit={handleSubmit} autoComplete = 'off'>
        <Form.Input value = {activity.title} name='title' onChange={handleInputChange} placeholder="title" />
        <Form.TextArea value = {activity.description} name = 'description' onChange={handleInputChange} placeholder="Description" />
        <Form.Input value = {activity.category} name='category' onChange={handleInputChange} placeholder="Category" />
        <Form.Input type = 'date' value = {activity.date} name='date' onChange={handleInputChange} placeholder="Date" />
        <Form.Input value = {activity.city} name='city' onChange={handleInputChange}placeholder="City" />
        <Form.Input value = {activity.venue} name='venue' onChange={handleInputChange} placeholder="Venue" />
        <Button loading={submitting} floated="right" positive content="Submit" />
        <Button onClick = {closeForm} floated="right" type="button" content="Cancel" />
    </Form>
   </Segment>
  )
}
