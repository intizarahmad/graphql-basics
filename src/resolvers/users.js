import usersJson from '../data/users.json'
const users = (parent, args, ctx, info)=>{
    const {query}  =  args
    if(query && query!=""){
        return usersJson.filter((user)=> user.name.toLowerCase().includes(query.toLowerCase()))
    }
    return usersJson
}
export {
    users
};