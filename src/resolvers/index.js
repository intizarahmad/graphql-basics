// queri imports
import  { user }  from './queries/user'
import  { users }  from './queries/users'
import  { auther }  from './queries/auther'
import  { post }  from './queries/post'
import  { posts }  from './queries/posts'
import  { comments }  from './queries/comments'
import  { calculator }  from './queries/calculator'

// Mutation imports 
import {createComment} from './mutations/createComment'
import {createUser} from './mutations/createUser'
import {createPost} from './mutations/createPost'


const resolvers = {
    Query: {
        comments,
        posts,
        users,
        user,
        post,
        calculator
    },
    Mutation: {
        createComment,
        createUser,
        createPost
    },
    Post: {
        auther,
        comments(parent, args, {db} , info){
            const {comments} = db
            return comments.filter((c)=>c.post == parent.id ) 
        }
    },
    User:{
        posts(parent, args, {db} , info){
            const {posts} = db
            return posts.filter((p)=>p.auther == parent.id ) 
        },
        comments(parent, args, {db} , info){
            const {comments } = db
            return commentsData.filter((c)=>c.auther == parent.id ) 
        }
    },
    Comment:{
        auther,
        posts(parent, args, {db} , info){
            const {posts} = db
            return posts.find((p)=>p.id == parent.post ) 
        }
    }
}
export default resolvers