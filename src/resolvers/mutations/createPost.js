
const createPost = (parent, args, {db}, info)=>{
    const {title, body, published, auther} = args
    const {users, posts} = args
    const userExists = users.find(u=>u.id === auther)
   if(!userExists){
        return new Error('Invalid auther')
    }
    const post ={
        id: Math.max.apply(Math,posts.map(a=>a.id))+1,
        title, 
        body, 
        published, 
        auther
    }
    posts.push(post)
    return post
}
export {
    createPost
}