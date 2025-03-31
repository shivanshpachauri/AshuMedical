import helmet from "npm:helmet";
import express from "npm:express@^4.17";
import cors from "npm:cors";
import morgan from "npm:morgan";
const middleware = express();

middleware.use(express.urlencoded({ extended: true }));
middleware.use(express.json());
middleware.use(cors());
middleware.use(helmet());
middleware.use(morgan("tiny"));

export default middleware;
