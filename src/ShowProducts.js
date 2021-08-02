import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowProducts = () => {

    const [products,setProducts] = useState([])

    const getProducts = async () =>{
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
    }

    useEffect(()=>{
        getProducts();
    },[])
    return (
        <div className="products-card-info">
            
            {
                products.map((product,index)=>(
                    <div>
 
                    <Card className="m-2 rounden shadow-lg " style={{ width: '22rem'  }}>
                        <Card.Img variant="top" src={product.image}/>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.price}</Card.Text>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{product.category}</Card.Text>
                           
                            <Link className="btn btn-primary m-2" to={`/${product.id}`} >Show Details</Link>
                        </Card.Body>
                        </Card>

                </div>    

                )
                  
                )
            }
        </div>
    )

}

export default ShowProducts;





