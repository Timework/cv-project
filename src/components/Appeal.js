import React from "react";

class Appeal extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        const { 
            name, 
            phone, 
            email, 
            changeStatus, 
            school, 
            suffering, 
            degree,
            company,
            title,
            tasks,
            start,
            end
        } = this.props

        return (
            <div className="edit">
                <h1>CV Resume</h1>
                <h2>Personal Information</h2>
                <p> {name} </p>
                <p> {phone} </p>
                <p> {email} </p>
                <h2>Education</h2>
                <p> {school} </p>
                <p> {degree} </p>
                <p> {suffering} </p>
                <h2>Work Experience</h2>
                <p> {company} </p>
                <p> {title} </p>
                <p> {tasks} </p>
                <p> {start} </p>
                <p> {end} </p>
                <button onClick={changeStatus}>Edit CV</button>
            </div>
        )
    }
    
}
export default Appeal;