
import commentsData from '../data/comments.json'

const comments = (parent, args, ctx , info) => {
    const { query } = args
    if(query){
       return commentsData.filter((p)=>p.text.toLowerCase().includes(query)) 
    }
    return commentsData
}

export {
    comments
}