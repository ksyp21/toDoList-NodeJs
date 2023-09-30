const { lists } = require("../model")


// exports.renderList = (req, res) => {
//     res.render("lists")
//     res.render("lists", { lists: lists }); // Pass the lists variable to the template?
// }

// exports.renderList = (req, res) => {
//     res.render("list")
// }

exports.addTask = async (req, res) => {
    // Handle adding a task here
    const task = req.body.task
    await lists.create({
        task: task
    })
    res.redirect("/")

    // You can perform further actions here, like saving the task to a database
};
exports.allList = async (req, res) => {
    const allLists = await lists.findAll()

    res.render('lists', { lists: allLists })
}

// exports.deleteList = async (req, res) => {
//     const id = req.param.id

//     await lists.destroy({
//         where: {
//             id: id

//         }

//     })
//     res.redirect("/")
// }
// listController.js
exports.deleteList = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        // Handle the case where 'id' is not provided
        return res.status(400).send("Invalid request. 'id' is missing.");
    }

    try {
        // Use Sequelize to delete the task with the provided 'id'
        const deletedList = await lists.destroy({
            where: {
                id: id,
            },
        });

        if (deletedList) {
            return res.redirect("/");
        } else {
            // Handle the case where the task was not found
            return res.status(404).send("Task not found.");
        }
    } catch (error) {
        console.error("Error deleting task:", error);
        return res.status(500).send("Internal Server Error");
    }
};




