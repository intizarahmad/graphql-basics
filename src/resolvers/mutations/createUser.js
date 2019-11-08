
const createUser = (parent, args, {db}, info)=>{
    const {users} = db
    const {name, email, age} = args.data
    const emailExists = users.find(u=>u.email === email)
   if(emailExists){
        return new Error('Email already exists')
    }
    const user ={
        id: Math.max.apply(Math,users.map(a=>a.id))+1,
        name,
        email,
        age
    }
    users.push(user)
    return user
}
export {
    createUser
}