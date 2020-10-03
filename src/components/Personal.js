import React from 'react';

class Personal extends React.Component {
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
            changePhone 
        } = this.props

        return (
            <div className="section">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={changeName} required />
                    <br></br>
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" value={email} onChange={changeEmail} required />
                    <br></br>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" value={phone} onChange={changePhone} required />
                    <br></br>
            </div>
        );
    }
}

export default Personal;