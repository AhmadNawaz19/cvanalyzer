import React, { useState, useEffect } from 'react'
import './styles/resumeUpload.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'


const schema = z.object({
  resume: z.instanceof(File, { message: "Resume is Required" })
    .refine((file) => file.type === 'application/pdf', "Only PDF file are allowed")
    .refine((file) => file.size <= 5 * 1024 * 1024),
  // description: z.string().min(20, 'Description must be at least 20 characters')
})

const ResumeUpload = React.memo(() => {

  const formData = new FormData()
  const [data, setData] = useState({
    resume: [],
    description: ''
  })
  const [error, setError] = useState({})
  const [serverError, setServerError] = useState('')

  const updateResume = (fileList) => {
    console.log('selected file: ', fileList)
    for (let file of fileList) {
      console.log(file)
      if (file.type !== "application/pdf") {
        setError((prev) => ({
          ...prev,
          resume: "Only PDF files are allowed",
        }));
        return;
      }
      setData((prev) => ({
        ...prev,
        resume: [...prev.resume, { file }],
      }));

      setError((prev) => ({
        ...prev,
        resume: undefined,
      }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    updateResume(e.dataTransfer.files);
  }


  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const sendResumeAndDescription = useMutation({
    mutationFn: (data) => axios.post('http://localhost:8000/file/fileupload', data, {
      withCredentials: true
    }),
    onSuccess: (response) => {
      console.log('Success: ', response)
    },
    onError: (err) => {
      console.log('Error: ', err.response.data)
      setServerError(err.response.data.message)
    }
  })

  const submitData = () => {
    console.log(data)
    formData.append("resume", data.resume);
    formData.append("description", data.description);
    sendResumeAndDescription.mutate(data)
    // const result = schema.safeParse(data)
    // if (!result.success) {
    //   setError(result.error.flatten().fieldErrors)
    //   console.log(result.error.flatten().fieldErrors);
    //   return;
    // } else {
    //   console.log(data)
    // }
  }

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div id='resumeUpload'>
      <div id={serverError ? "error" : null}>
        {serverError && (
          <p>{serverError}</p>
        )}
      </div>
      <div>
        <h1>Upload  Resume and Job Here! </h1>
      </div>

      <div id='mainUpload'>
        <form onSubmit={(e) => { e.preventDefault(), submitData() }}>
          <div id='upload'>

            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              id="uploadhere"
            >
              {data.resume.length > 0 ? (
                data.resume.map((f, idx) => {
                  return <div key={idx}>
                    <i className="fa-solid fa-file-pdf" style={{ fontSize: "50px", color: "red" }} />
                    <p style={{ fontSize: '2vw', color: 'white' }}>{idx + 1}: {f.file?.name}</p>
                  </div>
                })
              ) : (
                <>
                  <h1><i class="fa-solid fa-cloud-arrow-up"></i></h1>
                  <h2>Drag and Drop</h2>
                  <h3>or</h3>
                  <label htmlFor="selectRes">
                    Browse file
                  </label>
                  <input
                    id='selectRes'
                    type="file"
                    name='resume'
                    multiple
                    onChange={(e) => updateResume(e.target.files)}
                  />
                </>
              )}

              {
                error.resume && (
                  <p style={{ marginBottom: '20px', color: "red" }}>{error.resume}</p>
                )
              }
            </div>

          </div>

          <button id='uploadbtn' type='submit'>Upload</button>

          <div id='uploadjob'>
            <textarea
              placeholder={error.description ? error.description : "Enter Description"}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              style={{ color: error.description ? 'red' : null }}
              name='description'
            />
          </div>

        </form>
      </div>

    </div>
  )
})

ResumeUpload.displayName = 'resumeupload'
export default ResumeUpload