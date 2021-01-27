'use strict';

const User = use('App/Models/User');

class UserController {


    async login({ request, auth }) {
        const { email, password } = request.all();
        console.log(email, password);
        const token = await auth.attempt(email, password);
        return token;
    }

    async register({ request }) {
        console.log("----------register controller");
        const { email, password } = request.all();
        console.log(email, password);
        await User.create({
            email,
            password,
            username: email,
        });
        console.log("---------data sent");
        return this.login(...arguments);
    }


}

module.exports = UserController;
