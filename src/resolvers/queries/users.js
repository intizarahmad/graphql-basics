const users = (parent, args, {db}, info)=>{
    const {query}  =  args
    const {users } = db
    if(query && query!=""){
        return users.filter((user)=> user.name.toLowerCase().includes(query.toLowerCase()))
    }
    return users
}
export {
    users
};