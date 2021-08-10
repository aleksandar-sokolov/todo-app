import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import BasicCard from '../Card/BasicCard';
import { addTodo } from '../../redux/todo/todo.actions'

function TodoForm({ addTodo }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(
            {
                title: e.target.title.value,
                text: e.target.text.value
            }
        )
        e.target.title.value = '';
        e.target.text.value = '';
    }
    return (
        <BasicCard>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" placeholder="Enter Title" />
                </FormGroup>
                <FormGroup>
                    <Label for="text">Text Area</Label>
                    <Input type="text" name="text" id="text" />
                </FormGroup>

                <Button>Submit</Button>
            </Form>
        </BasicCard>
    )
}


const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
});


export default connect(null, mapDispatchToProps)(TodoForm);