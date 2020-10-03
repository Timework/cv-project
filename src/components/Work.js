import React from 'react';

class Work extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {
            company,
            title,
            tasks,
            start,
            end,
            changeCompany,
            changeTasks,
            changeTitle,
            changeStart,
            changeEnd
        } = this.props

        return (
            <div className="section">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" value={company} onChange={changeCompany} required />
                <br></br>
                <label htmlFor="title" >Title</label>
                <input type="text" id="title" value={title} onChange={changeTitle} required />
                <br></br>
                <label htmlFor="tasks" >Tasks</label>
                <textarea id="tasks" value={tasks} onChange={changeTasks} col="50" row="10" required />
                <br></br>
                <label htmlFor="start">Work start date</label>
                <input type="date" id="start" value={start} onChange={changeStart} max={new Date().toISOString().slice(0, 10)} required />
                <br></br>
                <label htmlFor="end">Work end date</label>
                <input type="date" id="end" value={end} onChange={changeEnd} min={start} max={new Date().toISOString().slice(0, 10)} required />
                <br></br>
            </div>
        );
    }
}

export default Work;