import { Dispatch } from "redux";
import { TodoInterface } from "../interfaces/interfaces";

export const readTodos = () =>{

    var mystorage = window.localStorage;
    var Completed = JSON.parse(mystorage.getItem("completed")|| "[]");
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")|| "[]");

    var todo={
        Completed:Completed,
        Inprogress:Inprogress
    }


    return (dispatch:Dispatch) =>{
        dispatch({
            type:"readTodo",
            payload:todo
        })
    }
}

export const addTodo = (todo:TodoInterface) =>{

    var mystorage = window.localStorage;
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")|| "[]");
    Inprogress.push(todo);
    mystorage.setItem('inprogress',JSON.stringify(Inprogress))

    var todolist={
        Completed:Inprogress,
        Inprogress:Inprogress
    }

    return (dispatch:Dispatch) => {
        dispatch({
            type:"addTodo",
            payload:todolist
        })
    }
}

export const deleteTodo = (todoid:number) =>{

    console.log("Inside DeleteTodos")

    var mystorage = window.localStorage;
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")|| "[]");

    Inprogress = Inprogress.filter(function(ele:TodoInterface,index:number){
        if(index!==todoid)
            return ele
    })

    var todolist={
        Completed:Inprogress,
        Inprogress:Inprogress
    }


    mystorage.setItem('inprogress',JSON.stringify(Inprogress))

    return (dispatch:Dispatch) => {
        dispatch({
            type:"deleteTodo",
            payload:todolist
        })
    }
}

export const doneTodo = (todoid:number) =>{

    var mystorage = window.localStorage;
    var Completed = JSON.parse(mystorage.getItem("completed")|| "[]");
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")|| "[]");

    console.log("Inside doneTodo")

    Completed.push(Inprogress[todoid])
    console.log(Completed)

    Inprogress =Inprogress.filter(function(ele:TodoInterface,index:number){
        if(index!==todoid)
            return ele
    })

    var todolist={
        Completed:Completed,
        Inprogress:Inprogress
    }

    mystorage.setItem('inprogress',JSON.stringify(Inprogress))
    mystorage.setItem('completed',JSON.stringify(Completed))


    return (dispatch:Dispatch) => {
        dispatch({
            type:"doneTodo",
            payload:todolist
        })
    }
}