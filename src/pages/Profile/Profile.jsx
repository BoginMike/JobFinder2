import React, { useEffect, useState } from 'react'
// import Header from '../../shared/components/Header'
import { Button, TextField } from '@mui/material'
// import FileUpload from '../../shared/components/FileUpload'
import { useForm } from 'react-hook-form';
import { getApiCall, patchApiCall } from '../../api-utils';

export default function Profile() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();


    const [user, setUser] = useState({})

    useEffect(() => {
        getApiCall("/users/my-info").then(response => {
            if(response.status){
                let data = response.data
                setUser(data);
                setValue('username',data.username)
                setValue('password',data.password)
                setValue('email',data.email)
                // future stuff setFileName(data.profilePicture)
            }
           
        })
    }, [setValue])


    function onSubmit(data) {
        // future stuff data['profilePicture'] = fileName;
        data['_id'] = user._id
        patchApiCall('/users', data)
            .then(r => {

            })
    }
     // future stuff - to add in a user image
    // function uploaded(fname) {
    //     setFileName(fname)
    // }
    return (
        <div>
            {/* <Header /> */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* futire stuff <div>
                        <Avatar src={process.env.REACT_APP_BASE_URL + '/image/' + user.profilePicture} />
                    </div>

                    <h4>Upload new image</h4>
                    <FileUpload onUpload={uploaded} /> */}

                    <div>
                        <TextField error={errors.username} helperText={errors.username ? "username is required" : ""} {...register("username", { required: true })}  variant="outlined" />
                    </div>
                    <div>
                        <TextField type='password' {...register("password")}  />
                    </div>
                    <div>
                        <TextField type='text' {...register("email")}  />
                    </div>



                    <Button type="submit" variant='contained' > Update Profile</Button>
                </form>
            </div>
        </div>
    )
}
