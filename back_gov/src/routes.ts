import { Router } from "express";
import { Auth } from "./controllers/auth.controller";
import { Beneficiary } from "./controllers/beneficiary.controller";

const router = Router();

const auth = new Auth();
const beneficiary = new Beneficiary();

//auth
router.post("/login", auth.login);

//search
router.post("/searchBeneficiary", beneficiary.search);

export { router };
