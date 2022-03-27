import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar";
import axios from "axios";

class CreatePoll extends React.Component {
  state = {
    name: '',
    description: '',
    election_type: '',
    c1_first_name: '',
    c1_last_name: '',
    c1_affiliation: '',
    c2_first_name: '',
    c2_last_name: '',
    c2_affiliation: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }
 
  handleSubmit = event => {
    event.preventDefault();
 
    const user = {
      name: this.state.name,
      description: this.state.description,
      election_type: this.state.election_type,
      c1_first_name: this.state.c1_first_name,
      c1_last_name: this.state.c1_last_name,
      c1_affiliation: this.state.c1_affiliation,
      c2_first_name: this.state.c2_first_name,
      c2_last_name: this.state.c2_last_name,
      c2_affiliation: this.state.c2_affiliation
    };
 
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

render() {
  return (
    <div>
      <Navbar/>
      <h1>Create a Poll</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-container">
          <div className="form-item">
            <TextField id="create-title" variant="filled" label="Title" required="true"/>
          </div>
          <div className="form-item">
            <TextField id="create-desc" variant="filled" multiline="True" minRows="3" maxRows="4" label="Description" required="true"/>
          </div>
          <div className="form-item">
            <TextField id="electiontype" variant="filled" label="Election Type" required="true"/>
          </div>
          <div className="form-item">
            <TextField id="canid1-fn" variant="filled" label="Candidate 1 First Name" required="true"/>
            <TextField id="canid1-ln" variant="filled" label="Candidate 1 Last Name" required="true"/>
          </div>
          <div className="form-item">
            <TextField id="canid1-affil" variant="filled" label="Candidate 1 Affiliation" required="true"/>
          </div>
          <div className="form-item">
            <TextField id="canid2-fn" variant="filled" label="Candidate 2 First Name" required="true"/>
            <TextField id="canid2-ln" variant="filled" label="Candidate 2 Last Name" required="true"/>
          </div>
          <div className="form-item">
            <TextField id="canid1-affil" variant="filled" label="Candidate 2 Affiliation" required="true"/>
          </div>
          <div className="form-item submit-btn">
            <span style={{ cursor: 'not-allowed' }}>
              <Button variant="contained">Submit</Button>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
}

export default CreatePoll;
  