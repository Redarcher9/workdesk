import { useDispatch } from "react-redux";
import { TodoInterface } from "../../redux/interface/todo";

export const addTodo = (todo:TodoInterface) => {

    //Initialising localstorage variables
    var mystorage = window.localStorage;
    var Completed = JSON.parse(mystorage.getItem("completed")|| "[]");
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")||"[]");
    //Pushing todo into db
    Inprogress.push(todo)
    mystorage.setItem('inprogress',JSON.stringify(Inprogress));
    console.log("Inside Redux toolkit addtodo")
}