import bodyParser from 'body-parser';
import express from 'express';
import router from './src/Cor/Routes/User';

const app = express();

app.use(bodyParser.json());

app.use(router);

app.listen(3333, () => {
    console.log('SERVER NO AR');
});