import express from "express";
import cors from "cors";
import { router } from "./routes";
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT;
const server = express();


server.use(cors());
server.use(express.json());
server.use(router);

server.listen(PORT, () => {
  console.log(`🚀 server is running at port ${PORT}`);
});
