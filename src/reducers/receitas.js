export default function receitas(state=[],action){
    switch(action.type){
        case 'GETRECEITAS':
            state=action.receitas;
            return state
        default:
            return state
    }
}