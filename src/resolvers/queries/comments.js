
const comments = (parent, args, {db} , info) => {
    const { query } = args
    const { comments } = db
    if(query){
       return comments.filter((p)=>p.text.toLowerCase().includes(query)) 
    }
    return comments
}

export {
    comments
}