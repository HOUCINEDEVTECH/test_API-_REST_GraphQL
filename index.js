const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');
const resolvers = require('./src/graphql/resolvers');

const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Configurer le serveur GraphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true // Interface GraphiQL pour tester les requêtes
}));

// Démarrage du serveur
app.listen(port, () => {
  console.log(`API GraphQL en écoute sur http://localhost:${port}/graphql`);
});
