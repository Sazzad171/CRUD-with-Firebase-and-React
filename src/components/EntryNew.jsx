import React from 'react'
import { Form, Button } from 'react-bootstrap';

export default function EntryNew({ name, subject ,grade, onHandleChange ,saveSubmittedData }) {
  return (
    <>
      <Form onSubmit={ saveSubmittedData } method="post">
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control name="name" value={ name } onChange={ onHandleChange } 
            type="text" placeholder="Enter name" required/>
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label>Subject:</Form.Label>
          <Form.Control name="subject" value={ subject } onChange={ onHandleChange } 
            type="text" placeholder="Enter subject" required/>
        </Form.Group>

        <Form.Group controlId="grade">
          <Form.Label>Grade:</Form.Label>
          <Form.Control name="grade" value={ grade } onChange={ onHandleChange } 
            type="text" placeholder="Enter grade" required/>
        </Form.Group>

        <Button className="w-100" variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
