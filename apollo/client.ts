import { ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";

// NO SUBSCRIPTION REQUIRED

const httplink = createHttpLink({
    uri:"http://localhost:3007/graphql",
});

const client = new ApolloClient({
    link: httplink,
    cache: new InMemoryCache(),
});

export default client;

