const express = require("express");
const router = express.Router();

const {
	getPeoples,
	getPersonById,
	addPerson,
	updatePerson,
	deletePerson,
} = require("../controllers/peoples");

// router.get("/", getPeoples);
// router.get("/:id", getPersonById);
// router.post("/", addPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

router.route("/").get(getPeoples).post(addPerson);
router.route("/:id").get(getPersonById).put(updatePerson).delete(deletePerson);

module.exports = router;
