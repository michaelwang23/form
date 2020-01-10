import React from 'react'
import MC from './MC'
import FRQ from './FRQ'
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          //tracks the select value: Multiple Choice or Free Response
          value: '',
          //tracks the questions added to the form
          questions: []
      };
    }
    //to delete a question, the element in the questions array is nulled
    deleteQuestion = (index) => {
        var questions = this.state.questions
        questions[index] = null
        this.setState({
            questions
        })
    }
    //whenever the user selects a type of question, either the MC or FRQ class gets appended to the questions array along with 2 props
    //the first prop parentCallback is used for deleting questions and the index prop tells the program which question to delete
    handleChange = (event) => {
        if (event.target.value === "mc"){
            this.setState({
                questions: this.state.questions.concat(<MC parentCallback = {this.deleteQuestion} index = {this.state.questions.length}/>)
          });
        }
        if (event.target.value === "frq"){
            this.setState({
                questions: this.state.questions.concat(<FRQ parentCallback = {this.deleteQuestion} index = {this.state.questions.length}/>)
          });
        }
    }
    //all the elements in the questions array are returned 
    render() {
      return (
        <div>
          {this.state.questions.map((item,index) => <div> {item} </div> )}
          <form>
            <label>
              Add new question:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">Choose an option</option>
                <option value="mc">Multiple Choice</option>
                <option value="frq">Free Response</option>
              </select>
            </label>
          </form> 
        </div>
      );
    }
  }
 export default Form;