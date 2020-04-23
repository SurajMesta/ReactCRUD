import React from 'react'
import Axios from 'axios'
const URI="http://localhost:5500"

class Create extends React.Component{
    constructor(props){
        super(props)
        this.id=React.createRef()
        this.name=React.createRef()
        this.email=React.createRef()
        this.designation=React.createRef()

        this.handleEvent=this.handleEvent.bind(this)
    }

    handleEvent(event){
        event.preventDefault()

        const body={
            id:this.id.current.value,
            name:this.name.current.value,
            email:this.email.current.value,
            designation:this.designation.current.value
        }

        Axios.post(`${URI}/empdetails`,body).then(result=>{
            console.log(result)
            console.log(result.data)
            alert("Success")

        }).catch(err=>{
            console.log(err)
        })


    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="jumbotron text-center">
                            Welcome to Creation Section
                        </h2>

                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <form onSubmit={this.handleEvent}>
                            <div className="form-group">
                            <label htmlFor=""><em>Id</em></label>
                            <input type="number" ref={this.id} required placeholder="Please Enter Id" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor=""><em>Name</em></label>
                                <input type="text" ref={this.name} required placeholder="Please Enter Name" className="form-control" autoFocus/>
                            </div>

                            <div className="form-group">
                                <label htmlFor=""><em>Email</em></label>
                                <input type="email" ref={this.email} required placeholder="someone@example.com" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor=""> <em>Designation</em></label>
                                <input type="text" ref={this.designation} required placeholder="Enter Designation" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-md btn-success"><em>Success</em></button>
                            </div>
                           

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create