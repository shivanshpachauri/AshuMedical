import helmet from "npm:helmet";
import express from "npm:express@^4.17";
import cors from "npm:cors";
import morgan from "npm:morgan";
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());
router.use(helmet());
router.use(morgan("tiny"));

export default router;
