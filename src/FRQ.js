import React from 'react'
class FRQ extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    //sends the index of the deleted question back to the parent Form 
    sendData = () => {
        var index = this.props.index
        this.props.parentCallback(index);
    }
    render() {
        return (
            <div>
                <p> Free Response </p>
                    <label>
                        <input type="text" placeholder = "Question" name="name" />
                    </label>
                        <input type="text" placeholder = "Answer"name="name" value = "Answer" />
             <button onClick = {this.sendData}> Remove Question </button>  
        </div>
        )
    }
}
export default FRQ;
