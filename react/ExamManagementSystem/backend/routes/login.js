const router = require("express").Router();
const connection = require("../db");

const databaseName = "USERS";

router.post("/:userType", (req, res) => {
    try {
        const user_id = req.body.user_id, password = req.body.password;
        const type = req.params.userType;
        console.log(req.body);
        connection.query("select * from " + databaseName + " where user_id=?", [user_id], (err, result) => {
            if (err) {
                console.log(err);
                res.status(400).send(err.message);
                return;
            }
            
            if (result) {
                if (result.length == 0)
                    res.status(400).send({ message: "Username does not exists" });
                else {
                    console.log(result[0].password);
                    if (result[0].password === password && result[0].type === type){
                        res.status(200).send({ loggedIn: true, user_id: user_id });
                    }
                    else{
                        res.status(400).send({ message: "Username and password does not match" });
                    }
                }
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});

module.exports = router;