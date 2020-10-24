import './env'
import { GraphQLServer } from 'graphql-yoga';
import { prisma } from "../generated/prisma-client";
import logger from "morgan"
import schema from "./schema"
import passport from "passport"
import "./passport"
import { sendSecretMail } from "./utils";
import { authenticateJwt } from './passport';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema, context: ({ request }) => ({ request })
})

server.express.use(logger("dev"));
server.express.unsubscribe(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhose:${PORT}`)
);