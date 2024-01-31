import { useState } from 'react'
import { useForm } from "react-hook-form";
import TaskList from './TaskList';


const Forms = () => {

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {},
      });

    const [taskTodo, setTaskTodo] = useState([]);

    const onSubmit = (data) => {
        data.id = Math.random();
        let todoList = [...taskTodo, data];
        setTaskTodo(todoList);
        reset();
      };

      const formStyle = {
        color: "blue",
        fontSize: "16px",
        border: "3px solid white",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "5px",
        height: "8rem",
      };

console.log(taskTodo)
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <input type="text" {...register("title")}></input>
        <select {...register("nivel")}>
          <option value="normal">normal</option>
          <option value="medio">medio</option>
          <option value="urgente">urgente</option>
        </select>
        <textarea {...register("description")}></textarea>
        <button type="submit">add</button>
      </form>
      <TaskList dataTask = {taskTodo} />
    </div>
  )
}

export default Forms