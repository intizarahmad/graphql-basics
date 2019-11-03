
import postsData from '../data/posts.json'

const posts = (parent, args, ctx , info) => {
    const { query } = args
    if(query){
       return postsData.filter((p)=>p.title.toLowerCase().includes(query) || p.body.toLowerCase().includes(query) ) 
    }
    return postsData
}

export {
    posts
}