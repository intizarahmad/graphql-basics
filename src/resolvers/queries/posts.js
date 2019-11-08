
const posts = (parent, args, {db} , info) => {
    const { query } = args
    const {posts} = db
    if(query){
       return posts.filter((p)=>p.title.toLowerCase().includes(query) || p.body.toLowerCase().includes(query) ) 
    }
    return posts
}

export {
    posts
}