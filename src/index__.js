import { GraphQLServer } from 'graphql-yoga'
import { getMaxListeners } from 'cluster'

// types defs 
const typeDefs = `
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean
        auther: User!
        comments:[Comment!]!
    }
    type User{
        id: ID!, 
        name: String!
        email: String!
        posts: [Post!]!
        comments:[Comment!]!
    }
    type Comment{
        id: ID!, 
        text: String!
        auther: User!
    }
    type Query {
        posts(query: String): [Post!]!
        users(query: String): [User!]!
        comments(query: String): [Comment!]!
    }    
`

const users = [{
    id:'1',
    name:'Intizar', 
    email: 'intizar@gmail.com'
},
{
    id:'2',
    name:'Kiran', 
    email: 'kiran@gmail.com'
},
{
    id:'3',
    name:'Akash', 
    email: 'akash@gmail.com'
}]

const comments = [{
    id:'1',
    text:'This is first comment',
    auther: '1',
    post: '1'
},
{
    id:'2',
    text:'This is second comment',
    auther: '1',
    post: '2'
},
{
    id:'3',
    text:'This is third comment',
    auther: '2',
    post: '1'
}]
const posts =[
                {
                    id: '1',
                    title:'hello Angular',
                    body:'this is angular related post',
                    published: false,
                    auther:'1'
                },
                {
                    id: '2',
                    title:'hello React',
                    body:'this is react related post',
                    published: true,
                    auther:'1'
                },
                {
                    id: '3',
                    title:'hello node',
                    body:'this is node related post',
                    published: false,
                    auther:'2'
                }
            ]
const resolvers = {
    Query: {
            posts(parent, args, ctx, info){
                if(!args.query){
                    return posts
                }
                return posts.filter((post)=>{
                    return  post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase())
                })
            },
            users(parent, args, ctx, info){
                if(!args.query){
                    return users
                }
                return users.filter((user)=>{
                    return  user.name.toLowerCase().includes(args.query.toLowerCase())
                })
            },
            comments(parent, args, ctx, info){
                if(!args.query){
                    return comments
                }
                return comments.filter((comment)=>{
                    return  comment.text.toLowerCase().includes(args.query.toLowerCase())
                })
            }
        },
    Post:{
        auther(parent, args, ctx, info){
           return users.find((user)=>{
                return user.id === parent.auther
            })
        },
        comments(parent, args, ctx, info){
            return comments.filter((comment)=>{
                     return comment.auther === parent.id
                 })
        }
    },
    User:{
        posts(parent, args, ctx, info){
           return posts.filter((post)=>{
                    return post.auther === parent.id
                })
        },
        comments(parent, args, ctx, info){
            return comments.filter((comment)=>{
                     return comment.auther === parent.id
                 })
         }
    },
    Comment:{
        auther(parent, args, ctx, info){
           return users.find((user)=>{
                return user.id === parent.auther
            })
        }
    }    
            
       
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('Server is up and running')
});