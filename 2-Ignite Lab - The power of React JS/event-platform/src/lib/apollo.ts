import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
uri: 'https://api-sa-east-1.graphcms.com/v2/cl4tyixlf0enz01t6274b6sou/master',
cache: new InMemoryCache()
})