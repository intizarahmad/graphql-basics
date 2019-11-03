import { GraphQLServer } from 'graphql-yoga'
import  { user }  from './resolvers/user'
import  { users }  from './resolvers/users'
import  { auther }  from './resolvers/auther'
import  { post }  from './resolvers/post'
import  { posts }  from './resolvers/posts'
import  { comments }  from './resolvers/comments'
import  { calculator }  from './resolvers/calculator'

import postsData from './data/posts.json'
import commentsData from './data/comments.json'
// types defs 
const typeDefs = `
    type Query {
        comments(query: String): [Comment]! 
        users(query: String): [User]!
        posts(query: String): [Post]!
        user: User!
        post: Post!
        calculator(num1: Int!, num2: Int!, operation: String!): Float! 
    }
    type User{
        id: ID!
        name : String!
        age : Int
        email: String!
        posts: [Post]!
        comments: [Comment]!
    } 

    type Comment{
        id: ID!
        text: String!
        auther: User!
        posts: Post!
    }
     
    type Post{
        id: ID!
        title : String!
        body : String!
        published: Boolean!
        auther: User!
        comments: [Comment]!
    } 

`

const resolvers = {
    Query: {
        comments,
        posts,
        users,
        user,
        post,
        calculator
    },
    Post:{
        auther,
        comments(parent, args, ctx , info){
            return commentsData.filter((c)=>c.post == parent.id ) 
        }
    },
    User:{
        posts(parent, args, ctx , info){
            console.log(parent.id)
            return postsData.filter((p)=>p.auther == parent.id ) 
        },
        comments(parent, args, ctx , info){
            return commentsData.filter((c)=>c.auther == parent.id ) 
        }
    },
    Comment:{
        auther,
        posts(parent, args, ctx , info){
            return postsData.find((p)=>p.id == parent.post ) 
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

const options = {
    port: process.env.PORT || 4000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
  }
   
  server.start(options, ({ port }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests.`,
    ),
  )
