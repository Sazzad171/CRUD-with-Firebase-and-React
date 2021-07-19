import instance from '../firebase/instance'

import React, { Component } from 'react'
import EntryNew from './EntryNew';
import ResultArea from './ResultArea';

export default class FullBody extends Component {

  // state
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subject: "",
      grade: "",
      results: []
    }
  }

  // change the value of input field
  onHandleChange = (e) => {
    this.setState({
      [e.currentTarget.name] : e.currentTarget.value
    });
  }

  // save submitted data
  saveSubmittedData = (e) => {
    e.preventDefault();

    // make array item
    const data = {
      name: this.state.name,
      subject: this.state.subject,
      grade: this.state.grade,
    }

    // add item to array & firebase database
    instance.post("/results.json", data).then((res) => {
      console.log(res);

      const results = [...this.state.results, {...data, id: res.data.name}];

      this.setState({
        name: "",
        subject: "",
        grade: "",
        results: results
      })
    })
  }

  // get request
  componentDidMount() {
    instance.get("/results.json").then( (res) => {
      var fetchedData = [];

      // push fetched data to array
      for (let key in res.data) {
        fetchedData.push({ ...res.data[key], id: key });
      }

      // set demo array to state array
      this.setState({
        results: fetchedData
      })
    })
  }

  // remove item
  removeItem = (id) => {
    instance.delete(`/results/${id}.json`).then( (res) => {

    })

    // update state
    this.setState({
      results: this.state.results.filter( (result) => result.id !== id )
    })
  }

  render() {
    const { name, subject, grade, results } = this.state

    return (
      <section className="my-3">
          <div className="container">
            <h2 className="mb-5">Result Management System</h2>
            <div className="row">
              {/* left column */}
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="new-entry-area px-3 py-4 h-100 rounded">
                  <h4 className="mb-5 text-danger">New Result Entry</h4>
                  <EntryNew name={ name } subject={ subject } grade={ grade }
                    onHandleChange={ this.onHandleChange } saveSubmittedData={ this.saveSubmittedData } />
                </div>
              </div>
              {/* right column */}
              <div className="col-md-6">
                <div className="result-show-area px-3 py-4 rounded h-100">
                  <ResultArea results={ results } removeItem={ this.removeItem } />
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }
}
