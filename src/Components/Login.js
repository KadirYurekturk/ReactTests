import { Box, Button, Card, CardContent,  TextField, Typography } from "@mui/material";
import React from "react";
import { createdAPIEndpoint, ENDPOINTS } from "../api";
import useForm from "../Hooks/useForm";
import Center from "./Center";


const initialState =() => ({ 
    email: '',
    name: '',
    phone: ''
});


export default function Login() {

const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
} = useForm(initialState);

const login = e => {
    e.preventDefault();
    if(validate())
       createdAPIEndpoint(ENDPOINTS.products)
       .fetch()
       .then(res => console.log(res));
    
}

const validate = () => {
    let temp = {};
    temp.email = values.email.length === 0 ? 'Email is required' : '';
    temp.email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) ? '' : 'Email is invalid';
    temp.name = values.name.length === 0 ? 'Name is required' : '';
    temp.phone = values.phone.length === 0 ? 'Phone is required' : '';
    temp.phone = (/^\d{10}$/.test(values.phone)) ? '' : 'Phone is invalid';
    setErrors(temp);
    return Object.values(temp).every(x => x === '');
}

    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent >
                <Typography  variant="h3" sx={{ my: 3 }}> Login</Typography>
                    <Box sx={{
                        display: "flex",
                        '&  .MuiTextField-root': {
                            margin: 1,
                            width: '90%'
                        },
                        '& .MuiButton-root': {
                            margin: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="false" onSubmit={login}>
                            <TextField label="Email" name="email" variant="outlined"  value={values.email} onChange={handleInputChange} {...(errors.email && {error:true, helperText:errors.email})} />
                            <TextField label="Name" name="name" variant="outlined" value={values.name} onChange={handleInputChange}  {...(errors.name && {error:true, helperText:errors.name})}/>
                            <TextField label="Phone" name="phone" variant="outlined" value={values.phone} onChange={handleInputChange} {...(errors.phone && {error:true, helperText:errors.phone})} />
                            <Button name="createUser" type="submit" variant="contained" size="large">Create User</Button>
                        </form>
                    </Box>
                </CardContent>

            </Card>
        </Center>
    )
}

