const { renderList, addTask, allTask, allList, deleteList } = require("../controller/listController")

const router = require("express").Router()

router.route("/").get(allList)
router.route("/addTask").post(addTask).get(allList)
router.route("/delete/:id").get(deleteList)



module.exports = router;