
export default function login(state = {logged:false, username:'',name:'',image:'',email:'',token:'',id:''},action){
    switch(action.type){
        case 'LOGIN':
            state={
                logged:true,
                username:action.username,
                name: action.name,
                image:action.image,
                email: action.email,
                token: action.token,
                id: action.id
            };
                return state
        case 'LOGOUT':                
        state={
            logged:false,
            username:'',
            name: '',
            image:'',
            email: '',
            token: '',
            id: ''
        };
        return state

        default:
            return state
    }
}