import React, { useEffect, useState } from 'react'
import './styles/setting.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'



const Setting = () => {

  const [pic, setPic] = useState(null)
  const [successMsg, setSuccessMsg] = useState('')
  const { 
    register,
    setError,
    setValue,
    getValues,
    clearErrors,
    handleSubmit,
    formState: { errors } } = useForm()
  const formData = new FormData();

  const UpdateProfile = useMutation({
    mutationFn: (data) => axios.post('http://localhost:8000/profile/updateProfile', data, {
      withCredentials : true
    }),
    onSuccess : (response) => {
      if(response.statusText === 'OK'){
        setSuccessMsg(response.data?.message)
      }
    },
    
    onError : (error) => {
      console.log(error.response)
      if(error.response?.statusText === "Unauthorized"){
        setError('root.serverError', {
          type : 'manual',
          message : "Current user not logged in.."
        })
      }else if(error.response?.statusText === "Internal Server Error"){
        setError('root.serverError', {
          type : 'manual',
          message : error.response?.statusText
        })
      }
      else{
        setError('root.serverError', {
          type : 'manual',
          message : error.response?.data.message
        })
      }
      
    }
  })

  useEffect(() => {
    console.log(successMsg)
  },[])

  const submiteData = (data) => {
   
    if (data.userPic.length === 0 && data.userName.trim() === "") {
      setError('root', {
        type: 'manual',
        message: "Select any one field"
      })

    } else {
      formData.append("userPic", data.userPic);
      formData.append("userName", data.userName);
      console.log("this is form object: ",formData)
      UpdateProfile.mutate(formData)
    }
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(URL.createObjectURL(file))
      setPic(URL.createObjectURL(file));
      setValue("userPic", file);
    }
  };

  return (
    <div id='setting'>
      <div id={errors.root?.serverError?.message || successMsg ?  "error" : null}>
          {errors.root?.serverError?.message || successMsg   && (
          <p>{errors.root?.serverError?.message || successMsg}</p>
        )}
      </div>
      <form onSubmit={handleSubmit(submiteData)}>
        <label id='picLabel' htmlFor="profile">
          <img  src={pic || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"} alt="profile" />
        </label>
        <input
          {...register('userPic')}
          type="file" id='profile'
          accept=".png,.jpg,"
          onChange={(e) => handleImage(e)}
          onClick={() => clearErrors("root.serverError")}
          onClick={() => clearErrors("root")}
        />

        <div id='updatename'>
          <label htmlFor="">Update UserName</label>
          <input
            {...register('userName')}
            type="text" placeholder='Enter Name'
            onClick={() => clearErrors('root.serverError')} 
            onClick={() => clearErrors('root')} 
          />
        </div>
        {
          errors.root && (
            <h3 style={{
              color: 'red',
              marginTop: '10px',
              marginLeft: '20px',
            }}>{errors.root.message}</h3>
          )
        }
        <button type='submit'>Save</button>
      </form>
        
    </div>
  )
}

export default Setting