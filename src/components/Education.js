import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { 
            school,
            degree,
            suffering,
            changeSchool,
            changeDegree,
            changeSuffering
         } = this.props

        return (
            <div className="section">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" value={school} onChange={changeSchool} required />
                    <br></br>
                    <label htmlFor="degree" >Degree</label>
                    <input type="text" id="degree" value={degree} onChange={changeDegree} required />
                    <br></br>
                    <label htmlFor="suffering">Date degree was awarded</label>
                    <input type="date" id="suffering" value={suffering} onChange={changeSuffering} max={new Date().toISOString().slice(0, 10)} required />
                    <br></br>
            </div>
        );
    }
}

export default Education;