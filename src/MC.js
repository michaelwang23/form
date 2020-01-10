import React from 'react'
class MC extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            multiplechoice: [0], //keeps track of number of multiple choice answers, values are arbitrary
            deleted: [], //keeps track of deleted indices,
            values: []
        };
        this.removeMc = this.removeMc.bind(this)
    }
    //adds an element to the array, it's value is based on the index (making it easier to filter out the deleted indices)
    addMc = () => {
        this.setState({
            multiplechoice: this.state.multiplechoice.concat(this.state.multiplechoice.length),
        })
    }
    //adds the index to the array of deleted indices
    removeMc = (index) => {
        this.setState({
            deleted: this.state.deleted.concat(index) 
        })
    }
    //sends the index of the deleted question back to the parent Form 
    sendData = () => {
        var index = this.props.index
        this.props.parentCallback(index); 
    }
    onChange = (index, event) => {
    //    console.log(event.target.value)
    //    console.log(index)
       var values = this.state.values
       values[index] = event.target.value
       this.setState({
           values
       })
    }

    render() {
        var that = this
        return (
            <div>
                <p> Multiple Choice </p>
                <label>
                        <input type="text" name="name" placeholder = "Question"/>
                </label>
                {/* filter out the indices in the array of deleted indices */}
                {this.state.multiplechoice.filter(d => that.state.deleted.indexOf(d) < 0).map(function(item,index) { 
                    return(
                        <div> 
                            <label>
                                <input value = {that.state.values[item]} type="text" name="name" placeholder = "Answer Choice" onChange={that.onChange.bind(that, item)} /> 
                            </label>
                            <label>
                            {/* clicking the button will remove the specific item/multiple choice answer */}
                            <button onClick = {() => that.removeMc(item)}>
                                X
                            </button>
                            </label>
                        </div> 
                    )
                })}
                <button onClick = {this.addMc}>
                    Add Choice
                </button>
                <button onClick = {this.sendData}> Remove Question </button>
            </div>
        )
    }
    
}


export default MC;