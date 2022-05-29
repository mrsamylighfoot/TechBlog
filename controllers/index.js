const router = require("express").Router();
const apiRoutes = require("./api/user-routes");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/", homeRoutes);
router.use("/dasboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
