import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../Constant/Constant"; 
export const addtask=(payload)=>{
    return {
        type:ADD_TASK,
        payload
    }
}
export const deletetask=(payload)=>{
    return {
        type:DELETE_TASK,
        payload
    }
}
export const donetask=(payload)=>{
    return {
        type:DONE_TASK,
        payload
    }
}
export const edittask=(payload)=>{
    return {
        type:EDIT_TASK,
        payload
    }
}