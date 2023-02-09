import {React, Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "../products.json";
import Product from "./Product";
export default class Products extends Component{

constructor(props){
    super(props);
}

render(){
return(
<Container>
    <Row>
{data.map((prod,index)=>(
    <Col>
    
    <Product 
    key={index}
    product={prod}
    />

    </Col>
   
))}
</Row>
</Container>





)


}
}