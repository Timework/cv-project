import React from 'react';
import Personal from './Personal'
import Education from './Education'
import Work from './Work'

class Edit extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { 
            name,
            email,
            phone,
            changeName,
            changeEmail, 
            changePhone, 
            changeStatus, 
            school, 
            degree, 
            suffering, 
            changeSchool, 
            changeSuffering, 
            changeDegree,
            company,
            title,
            tasks,
            start,
            end,
            changeCompany,
            changeTitle,
            changeTasks,
            changeStart,
            changeEnd 
        } = this.props

        return (
            <div className="edit">
                <form onSubmit={changeStatus}>
                <Personal
                    name={name}
                    email={email}
                    phone={phone}
                    changeName={changeName}
                    changeEmail={changeEmail}
                    changePhone={changePhone}
                    changeStatus={changeStatus}
                />
                <Education
                    school={school}
                    degree={degree}
                    suffering={suffering}
                    changeSchool={changeSchool}
                    changeSuffering={changeSuffering}
                    changeDegree={changeDegree}
                />
                <Work
                    company={company}
                    title={title}
                    tasks={tasks}
                    start={start}
                    end={end}
                    changeCompany={changeCompany}
                    changeTasks={changeTasks}
                    changeTitle={changeTitle}
                    changeStart={changeStart}
                    changeEnd={changeEnd}
                />

                    <button type="submit">Submit CV</button>
                </form>
            </div>
        );
    }
}

export default Edit;
