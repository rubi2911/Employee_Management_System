import {Router} from "express";
import { protect } from "../middleware/auth.js";
import { getProfile } from "../controllers/profileController.js";
import { updateEmployee } from "../controllers/EmployeeController.js";


const profileRouter=Router();

profileRouter.get("/",protect, getProfile)
profileRouter.post("/",protect, updateEmployee)


export default profileRouter;