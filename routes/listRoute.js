const { renderList } = require("../controller/listController")

const router = require("express").Router()

router.route("/").get(renderList)

module.exports = router;