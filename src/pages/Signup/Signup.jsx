import React, { Fragment } from 'react'
import { postApiCall } from '../../shared/api-utils'
import { useForm } from "react-hook-form";
import { Button, TextField } from '@mui/material';
// import FileUpload from '../../shared/components/FileUpload';
import { useNavigate } from 'react-router-dom';
import Header from '../../shared/components/Header';

export default function Signup() {
    const navigate = useNavigate()
    const { register, handleSubmit,  formState: { errors } } = useForm();
    function onSubmit(data) {
        //future stuff  data['profilePicture'] = fileName;
        postApiCall('/users', data)
            .then(r => {
                if (r === "User Created") {
                    navigate('/login')
                }else{
                    window.alert("Something went wrong")
                }
            })
    }
    
    // future stuff
    // function uploaded(fname) {
    //     setFileName(fname)
    // }

    return (
        <Fragment>
            <Header />
            <div className='login-page'>
                <form className='login-container' onSubmit={handleSubmit(onSubmit)}>

                    <TextField error={errors.username} helperText={errors.username ? "username is required" : ""} {...register("username", { required: true })} label="Username" variant="outlined" />

                    <TextField type='password' {...register("password")} label="Password" />

                    <TextField type='text' {...register("email")} label="email" />

                    {/* future stuff <FileUpload onUpload={uploaded} /> */}

                    <Button type="submit" variant='contained' > SIGNUP</Button>
                </form>
            </div>
        </Fragment>
    )
}



