import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { PureComponent, useEffect, useState } from 'react';
import { createdAPIEndpoint, ENDPOINTS } from '../api';


export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        createdAPIEndpoint(ENDPOINTS.products)
            .fetch()
            .then(res => {
                setProducts(res.data.pageProducts)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
     products.length > 0 ?
       <Card sx={{maxWidth:640, mx:'auto', mt:5 }}>
           <CardContent>
            <Typography variant="h4">
                {products[0].name}
            </Typography>
            <List>
                {products.map(product => (
                    <ListItem key={product.id}>
                        <ListItemText primary={product.name} secondary={product.stock} />
                    </ListItem>
                ))}
            </List>
            </CardContent>

       </Card>
        :
        <div>
            <h1>Products</h1>
            <p>Loading...</p>
        </div>

    );
}
