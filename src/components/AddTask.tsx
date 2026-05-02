import { useState } from "react";
import Input from "./Input";

function AddTask(props: any) {
    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")

    return(
        <div  className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input type="text" 
                    placeholder="Digite o título da tarefa" 
                    value={title}
                    onChange={(event: any) => setTitle(event.target.value)}/>

            <Input type="text" 
                   placeholder="Digite a descrição da tarefa" 
                   value={description}
                   onChange={(event: any) => setDescription(event.target.value)}/>

            <button className="bg-slate-500 text-white px-4 py-2 rounded-md"
                    onClick={() => {
                        if(!title.trim() || !description.trim()) {
                            return alert("Infrome o titulo e a descrição")
                        }

                        props.onAddTaskSubmit(title, description)
                        setTitle("")
                        setDescription("")
                    }}>
                Adicionar
            </button>
        </div>
    )
}

export default AddTask;
