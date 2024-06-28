/**
 * This filed which is in routes will only be used to redirect all the urls. 
 */

import express from "express"
import { deleteUser, getAllUsers, get_userinfo_getmethod_id, get_userinfo_querystring_method_id, register, updateUser } from "../controllers/user.js";

const router = express.Router();

// using post method to pass data in body. 
router.post("/new", register);

// using controlers to call fucntion getAllUsers where all the logic is writen. 
router.get("/all", getAllUsers);

router.get("/userid", get_userinfo_querystring_method_id);

// keep dynamic route in last as this will consider every thing after userid/ as id. 
// if need to pass id dynamically.
router.get("/userid/:id", get_userinfo_getmethod_id);


/* if we have any update delete request for user then we can use 
        router.put("/userid/:id" , updateUser);
        router.delete("/userid/:id", deleteUser);
or you can use 
*/
router.route("/userid/:id").get(get_userinfo_getmethod_id).put(updateUser).delete(deleteUser)


export default router;
