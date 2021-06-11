import React, { Component } from 'react';
export default class Todo extends Component {
    state = {
        taskList: ["Task-1", "task-2", "task-3"],
        currTask:""
    }
    deleteTask(cTask) {
        let filteredTask = this.state.taskList
            .filter(function (task) {
                return task !== cTask;
            })
        this.setState({
            taskList: filteredTask
        })
    }
    handleCurrTask = (e) =>{
        let currVal = e.target.value;
        this.setState({
            currTask:currVal
        })
    }
    addTask = () =>{
        let currTask = this.state.currTask;
        let taskArr = [...this.state.taskList,currTask];
        this.setState({
            taskList:taskArr,
            currTask:""
        })

    }
    render() {
        return (
            <div>
                <div className="input-container">
                    <input type="text" value={this.state.currTask} onChange={this.handleCurrTask}/>
                    <button onClick={this.addTask}> Submit</button>
                </div>
                <div className="task-list">
                    <ul>
                        {this.state.taskList.map((task) => {
                            return (
                            <li className="tasklist">
                                <p>{task}</p>
                                <button onClick={ () =>{ this.deleteTask(task) }}>Delete</button>
                            </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}