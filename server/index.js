import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers.js';
import typeDefs from './typeDefs.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

async function initServer() {
    const app = express();
    app.use(cors());
    dotenv.config();
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.use((req, res) => {
        res.send('Server started successfully');
    });
    const PORT = process.env.PORT || 6969;

    try {
        mongoose.connect(process.env.mongodb);
        console.log('Connect to MongoDB at port ' + PORT);
    } catch (error) {
        console.log(error);
    }

    app.listen(PORT, () => console.log(`Express server is running at ${PORT}`));
}

initServer();
