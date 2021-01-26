import HTTP from '../http'


export default {
    namespaced: true,
    state: {
        registerEmail: "hello",
        registerPassword: "world",
    },
    actions: {
        register({commit, state}){

        return HTTP().post('/auth/register',{
            email: state.registerEmail,
            password: state.registerPassword,
        })
        }
    },
    mutations: {
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
    }
}