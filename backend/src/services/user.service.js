import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUser = async (data) => {
  try {
    const result = await prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    return result;
  } catch (error) {
    console.error(error);
  }
}

export const CreateProviderUser = async (data) => {
  try {
    let result = await prisma.users.create({
      data : {
        name : data.name,
        email : data.email,
        password : 'null',
        provider : data.provider,
        profile : data.avatar_url || data.picture
      }
    })
    return result
  }catch(err) {
    console.log(err)
  }
}

export const checkUserExist = async (email, provider) => {
  const result = await prisma.users.findFirst({
    where : {
      email,
      provider
    }
  })
  if(!result){
    return {email : false}
  }
  else{
     return result
  }
}

export const updateNamePicture = async (file,userName, email) => {
  const result = await prisma.users.update({
    where : {
      email
    },
    data : {
      profile : file,
      name : userName
    }
  })
  if(!result.email){
    return {
      "success" : false,
      "message" : "profile not updata"
    }
  }else{
    return {
      "success" : true,
      "message" : "profile updata",
      "profile" : result.profile,
      "userName" : result.name
    }
  }
}

export const updateName = async (userName, email) => {
  console.log(userName)
  const result = await prisma.users.update({
    where : {
      email
    },
    data : {
      name : userName
    }
  })
  if(!result.email){
    return {
      "success" : false,
      "message" : "profile not updata"
    }
  }else{
    return {
      "success" : true,
      "message" : "profile updata",
      "userName" : result.name
    }
  }
}

export const updatePicture = async (file, email) => {
  console.log(userName)
  const result = await prisma.users.update({
    where : {
      email
    },
    data : {
      profile : file
    }
  })
  if(!result.email){
    return {
      "success" : false,
      "message" : "profile not updata"
    }
  }else{
    return {
      "success" : true,
      "message" : "profile updata",
      "Profile" : result.profile
    }
  }
}
