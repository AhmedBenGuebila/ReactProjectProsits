
import {React,Component } from "react";
import { Button, Card } from "react-bootstrap";

export default class Product extends Component{

    constructor(props){
        super(props);
        console.log('hello')
        this.state = props
    }

    render(){
    
        return(

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../assets/images/"+this.state.product.img)} />
            <Card.Body>
              <Card.Title>{this.state.product.name}</Card.Title>
              <Card.Text>
                {this.state.product.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        
           

        )

 
    }
    
    
}