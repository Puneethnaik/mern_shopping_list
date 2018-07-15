import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component{
    state = {
        items : [
            {id:uuid(), name : "Milk"},
            {id:uuid(), name : "Water"},
            {id:uuid(), name : "Juice"},
            {id:uuid(), name : "Rice"},
            {id:uuid(), name : "Bread"}
        ]
    }
    render(){
        const {items} = this.state;
        return (
            <Container>
                <Button color = "dark" style = {{marginBottom:'2rem'}} onClick = {() => {
                    const name = prompt('Enter item');
                    if(name){
                        this.setState(state => ({
                            items : [...state.items, {id:uuid(), name}]
                        }));
                    }
                }} >
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className = "shopping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key = {id} classNames = "fade" timeout = {500}>
                                <ListGroupItem>
                                    <Button color = "danger" className = "remove-btn" size = "sm" onClick = {() => {
                                        this.setState(state => ({
                                            items : this.state.items.filter(item => item.id !== id)
                                        }))
                                    }}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList;