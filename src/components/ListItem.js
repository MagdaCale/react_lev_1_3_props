import './ListItem.css'
import Task from './Task'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); 

const ListItem = (props) => {

    return (
        <div>
            <h1>To do list</h1>
            <ul>
                {props.tasks.map((elt,i) =>
                <Task 
                key={i}
                icon={elt.icon}
                text={elt.task} 
                img={elt.img}
                
                />
                )}
            </ul>
        </div>
    )

}

export default ListItem;