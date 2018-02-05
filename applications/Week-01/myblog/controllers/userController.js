// Login a User
exports.login = function(req, callback) {
    console.log('Processing login request...');
    console.log(req.body);

    var loginData = req.body;

    if(loginData !== undefined && loginData !== null && Object.keys(loginData).length > 0) {
        if(User.getUserByUsername(loginData.username)){}
        callback.call(false, 'Login successful!');

    } else {
        callback.call('Login FAILED!!!', false);
    }

};
