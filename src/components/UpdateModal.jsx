import React from 'react'
import Modal from 'react-modal';
import { Form, Button } from 'react-bootstrap';

export default function UpdateModal({ modalStatus, closeModal, name, subject ,grade, onHandleChange, updateResult }) {

  // modal style
  const customStyles = {
    overlay: {
      backgroundColor: 'rgb(0 0 0 / 45%)'
    },
    content: {
      top: '10%',
      left: '30%',
      right: '30%',
      bottom: '10%',
      background: '#141214'
    },
  };
  return (
    <>
      <Modal isOpen={modalStatus} onRequestClose={closeModal} style={ customStyles } >
          <h2>Update Result</h2>
          <Form method="post" onSubmit={ updateResult } >
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
              Update
            </Button>
          </Form>
      </Modal>
    </>
  )
}
