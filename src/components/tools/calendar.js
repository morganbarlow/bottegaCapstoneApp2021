import React, { Component } from "react";

export default class Calendar extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            text: "",
            reminderExists: false,
            reminderId: undefined
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(props){
        fetch(
            `https://bottega-capstone-api-2021.herokuapp.com/appointment/get`, 
        )
        .then(response => response.json())
        .then(data => console.log(data))
        //debugging and housekeeping
        .then(data => {
            if (data.text) {
                this.setState({ 
                    text: data.text,
                    reminderExists: true,
                    reminderId: data.id              
                })
            }
        })
        .catch(error => console.log("Error getting appointments", error))
    }

    handleChange(event){
        this.setState({ text: event.target.value })
    }

    handleSubmit(){
        if (this.state.reminderExists === false && this.state.text != "") {
            fetch("https://bottega-capstone-api-2021.herokuapp.com/appointment/add",{
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    text: this.state.text,
                    date: this.props.date,
                    month_id: this.props.monthId,
                    hour: this.props.hour,
                    minute: this.props.minute
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        }
        else if (this.state.reminderExists === true && this.state.text != ""){
            fetch(`https://bottega-capstone-api-2021.herokuapp.com/appointment/update/${this.state.reminderId}`,{
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ text: this.state.text })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        }
        else if (this.state.reminderExists === true && this.state.text === "") {
            fetch(`https://bottega-capstone-api-2021.herokuapp.com/appointment/delete/${this.state.reminderId}`, { method: "DELETE" })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        }
    }


    render() {
        return (
            <div className = {`calendar ${this.props.overflow ? "overflow" : null }`}>
                <div className= "date">{this.props.date}</div>
                <textarea 
                    value={this.state.text} 
                    onChange={this.handleChange} 
                    onBlur= {this.handleSubmit}
                    disabled={this.props.overflow ? true : false}
                ></textarea>
            </div>
        )
    }
}