import { GraphQLServer } from 'graphql-yoga'

// types defs 
import  typeDefs  from './schemas'
import  resolvers  from './resolvers'

// Database : This is a json file 
import db from './db'

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context:{
        db
    }
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
