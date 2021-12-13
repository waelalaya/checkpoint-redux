import { ADD_TASK,DELETE_TASK,DONE_TASK,EDIT_TASK } from "../Constant/Constant";
const initialState = {
    todoliste:[]
};
const Todoreducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case ADD_TASK : return {...state,todoliste:[...state.todoliste,payload]}
        case DELETE_TASK : return {...state,todoliste:state.todoliste.filter(el =>el.id !==payload)};
        case DONE_TASK : return {...state,todoliste:state.todoliste.map(el =>el.id === payload ? {...el,isDone:!el.isDone }:el)};
        case EDIT_TASK : return {...state,todoliste:state.todoliste.map(el =>el.id === payload.id ? {...el,text:payload.task}:el)};
        default: return state;
    }
    }

    export default Todoreducer