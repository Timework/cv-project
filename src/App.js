import React from 'react';
import './App.css';
import Edit from './components/Edit'
import Appeal from './components/Appeal'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      school: "",
      degree: "",
      suffering: "",
      company: "",
      title: "",
      tasks: "",
      start: "",
      end: "",
      edit: true,
    }

    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeSchool = this.changeSchool.bind(this);
    this.changeDegree = this.changeDegree.bind(this);
    this.changeSuffering = this.changeSuffering.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeTasks = this.changeTasks.bind(this);
    this.changeStart = this.changeStart.bind(this);
    this.changeEnd = this.changeEnd.bind(this);
  }

  changeEnd = (e) => {
    this.setState({
      end: e.target.value,
    })
  }


  changeStart = (e) => {
    this.setState({
      start: e.target.value,
    })
    if (this.state.start >= this.state.end) {
      this.setState({
        end: "",
      })
    }
  }


  changeTasks = (e) => {
    this.setState({
      tasks: e.target.value,
    })
  }


  changeTitle= (e) => {
    this.setState({
      title: e.target.value,
    })
  }


  changeCompany = (e) => {
    this.setState({
      company: e.target.value,
    })
  }


  changeSuffering = (e) => {
    this.setState({
      suffering: e.target.value,
    })
  }

  changeDegree = (e) => {
    this.setState({
      degree: e.target.value,
    })
  }

  changeSchool = (e) => {
    this.setState({
      school: e.target.value,
    })
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  changePhone = (e) => {
    this.setState({
      phone: e.target.value,
    })
  }

  changeStatus = (e) => {
    e.preventDefault();
    if (this.state.edit) {
      this.setState({
        edit: false,
      })
    } else {
      this.setState({
        edit: true,
      })
    }
  }
  render() {
    const {
      name, 
      email, 
      phone, 
      edit, 
      school, 
      degree, 
      suffering,
      company,
      title,
      tasks,
      start,
      end
    } = this.state
    let display;


    if (edit) {
      display = <Edit 
      name={name}
      email={email}
      phone={phone}
      changeName={this.changeName}
      changeEmail={this.changeEmail}
      changePhone={this.changePhone}
      changeStatus={this.changeStatus}
      school={school}
      degree={degree}
      suffering={suffering}
      changeSchool={this.changeSchool}
      changeDegree={this.changeDegree}
      changeSuffering={this.changeSuffering}
      company={company}
      title={title}
      tasks={tasks}
      start={start}
      end={end}
      changeCompany={this.changeCompany}
      changeTitle={this.changeTitle}
      changeTasks={this.changeTasks}
      changeStart={this.changeStart}
      changeEnd={this.changeEnd}
      />
    } else {
      display = <Appeal
        name={name}
        email={email}
        phone={phone}
        school={school}
        degree={degree}
        suffering={suffering}
        company={company}
        title={title}
        tasks={tasks}
        start={start}
        end={end}
        changeStatus={this.changeStatus}
      />
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default App;
