import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Task(props: any) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task: any) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);

        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((tasks:any) => 
                <li key={tasks.id} className="flex gap-2">
                    <button onClick={() => props.onTaskClick(tasks.id)} 
                            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${tasks.isComplete && 'line-through'}`}>
                        {tasks.title}
                    </button>
                    
                    <Button onClick={() => onSeeDetailsClick(tasks)}>
                        <ChevronRightIcon />
                    </Button>

                    <Button onClick={() => props.onDeleteTaskClick(tasks.id)}>
                        <TrashIcon />
                    </Button>
                </li>
            )}
        </ul>
    )
}

export default Task
;