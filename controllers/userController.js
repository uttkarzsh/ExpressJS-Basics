let user = {
    userName : "",
    userEmail : "",
    userPassword : "",
}

export const addUser = (req,res) => {
    user = {
        userName: req.body.name,
        userEmail: req.body.email,
        userPassword: req.body.password
    };
    res.send("User Added Successfully");
}

export const getUser = (req, res) => {
    res.send(`The user is ${user.userName}. The email is ${user.userEmail}. The password is ${user.userPassword}.`)
}

export const deleteUser = (req, res) => {
    user = {
        userName: "",
        userEmail: "",
        userPassword: ""
    };
    res.send("User deleted.");
}

