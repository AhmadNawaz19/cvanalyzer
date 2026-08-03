import express from "express";
import z from "zod";
import fs from 'fs/promises'

const schema = z.object({
    description : z.string().min(20, 'enter minimum 20 word description.')
})

export const validateFileData = async (req, res, next) => {
    const description = req.body
    const files = req.files
    
    if(!files || files.length === 0){
        res.status(400).send('At least one file select...')
    }
    else if(!description){
        res.status(400).send('missing description')
    }

    const result = schema.safeParse(description)

    if(!result.success) {
        for (const f of files){
            await fs.unlink(f.path)
        }
        res.send(result.error.flatten().fieldErrors)
    }else{
        next();
    }

}