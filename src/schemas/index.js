const typeDefs = `
    type Query {
        comments(query: String): [Comment]! 
        users(query: String): [User]!
        posts(query: String): [Post]!
        user: User!
        post: Post!
        calculator(num1: Int!, num2: Int!, operation: String!): Float! 
    }
    type Mutation{
        createUser(data: CreateUserInput): User!
        createPost(title: String!, body: String!, published: Boolean,auther: Int!): Post!
        createComment(text: String!, auther: Int!, post: Int!): Comment!
    }
    type User{
        id: ID!
        name : String!
        age : Int
        email: String!
        posts: [Post]!
        comments: [Comment]!
    } 
    input CreateUserInput {
        name: String!
        email: String!
        age: Int 
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
export default typeDefs
