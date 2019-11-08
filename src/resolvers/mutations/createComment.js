
const createComment = (parent, args, {db}, info)=>{
    const {text, auther, post} = args
    const {comments, posts, users} = args
    const userExists = users.find(u=>u.id === auther)
    const postExists = posts.find(p=>p.id === post)
    if(!userExists){
        return new Error('User does not exists')
    }
    if(!postExists){
        return new Error('Post does not exists')
    }
    const comment = {
        id: Math.max.apply(Math,comments.map(a=>a.id))+1,
        text,
        auther,
        post
    }
    comments.push(comment)
    return comment
}
export {
    createComment
}