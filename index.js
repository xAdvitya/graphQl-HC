import express from 'express';

import schema from './schema';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolvers';

const app = express();

app.get('/', (req, res) => {
  res.send('message');
});

const root = { lco: () => console.log('hello') };

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(3000, console.log('running at 3000'));
