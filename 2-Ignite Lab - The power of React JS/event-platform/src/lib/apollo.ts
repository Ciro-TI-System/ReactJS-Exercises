import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r1fm8d0fh301yyazv0be92/master',
cache: new InMemoryCache()
})