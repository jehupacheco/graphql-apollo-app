import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from './schema';

const APP_PORT = 5000;
const APP_HOST = '0.0.0.0';

const app = express();

app.use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(APP_PORT, APP_HOST, () => {
  console.log(`App listening on port ${APP_HOST}:${APP_PORT}`);
});
