import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./camponents/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")


    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)

    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    // const allChangeFilterHandler = () => {
    //     props.changeFilter("all")
    // }
    //
    // const activeChangeFilterHandler = () => {
    //     props.changeFilter("active")
    // }
    //
    // const completedChangeFilterHandler = () => {
    //     props.changeFilter("completed")
    // }

    const tsarChangeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (tID: string) => {
        props.removeTask(tID)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onChange={onChangeHandler} onKeyPress={onKeyPressHandler} value={title}/>
            {/*<button onClick={addTaskHandler}>+</button>*/}
            <Button name={'+'} callBack={addTaskHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            {/*<button onClick={() =>removeTaskHandler(t.id)}>x</button>*/}
                            <Button name={'x'} callBack={() =>removeTaskHandler(t.id)} />
                        </li>
                    )
                })
            }
        </ul>
        <div>
            {/*<button onClick={allChangeFilterHandler}>All</button>*/}
            {/*<button onClick={activeChangeFilterHandler}>Active</button>*/}
            {/*<button onClick={completedChangeFilterHandler}>Completed</button>*/}

            {/*<button onClick={() => tsarChangeFilterHandler('all')}>All</button>*/}
            {/*<button onClick={() => tsarChangeFilterHandler('active')}>Active</button>*/}
            {/*<button onClick={() => tsarChangeFilterHandler('completed')}>Completed</button>*/}
            <Button name={'all'} callBack={() => tsarChangeFilterHandler('all')}/>
            <Button name={'active'} callBack={() => tsarChangeFilterHandler('active')}/>
            <Button name={'completed'} callBack={() => tsarChangeFilterHandler('completed')}/>
        </div>
    </div>
}
