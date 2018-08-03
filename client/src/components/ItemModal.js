import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }

        //Add item using addItem action
        this.props.addItem(newItem);

        //Close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                   color="dark"
                   style={{marginBottom: '2rem'}}
                   onClick={this.toggle}
                >Lisästä
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Lisää kohde ostoslistaan</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Esine</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Lisää ostoselementti"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginBottom: '2rem'}}
                                    block
                                >Lisästä
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);