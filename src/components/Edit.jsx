import React from 'react'
import Axios from 'axios'

const URI="http://localhost:5500"

class Edit extends React.Component{
    constructor(props){
        super(props)
        this.id=React.createRef()
        this.name=React.createRef()
        this.email=React.createRef()
        this.designation=React.createRef()
    
        this.state={
            //in order to fetch with reference id we are using the following
            empid: this.props.match.params.id,
            id:0,
            name:"",
            email:"",
            designation:""
        }

        this.handleEvent=this.handleEvent.bind(this)
        this.onIdChange=this.onIdChange.bind(this)
        this.onNameChange=this.onNameChange.bind(this)
        this.onEmailChange=this.onEmailChange.bind(this)
        this.onDesignationChange=this.onDesignationChange.bind(this)
    
    }

    onIdChange(event){
        let id=event.target.value
        this.setState({
            id
        })
    }
    onNameChange(event){
        let name=event.target.value
        this.setState({
            name
        })
    }

    onEmailChange(event){
        let email=event.target.value
        this.setState({email})
    }

    onDesignationChange(event){
        let designation=event.target.value
        this.setState({designation})
    }

    handleEvent(event){
            event.preventDefault()

            const body={
                id:this.state.id,
                name:this.state.name,
                email:this.state.email,
                designation:this.state.designation
            }
           
            // updating the data with id
            Axios.patch(`${URI}/empdetails/${this.state.empid}`,body).then(result=>{
                console.log(result.data)
                alert("Data Updation Success")
            }).catch(err=>{
                console.log(err)
            })

    }

    componentDidMount(){
        // fetching the data for edit with id
        Axios.get(`${URI}/empdetails/${this.state.empid}`).then(result=>{
            console.log(result.data)

            this.setState({
                id:result.data.id,
                name:result.data.name,
                email:result.data.email,
                designation:result.data.designation


            })
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
                            Welcome to The Edition Section
                        </h2>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <form onSubmit={this.handleEvent}>
                            <div className="form-group">
                            <label htmlFor=""><em>Id</em></label>
                            <input type="number" value={this.state.id} ref={this.id} required placeholder="Please Enter Id" className="form-control" onChange={this.onIdChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor=""><em>Name</em></label>
                                <input type="text" value={this.state.name} ref={this.name} required placeholder="Please Enter Name" className="form-control" autoFocus onChange={this.onNameChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor=""><em>Email</em></label>
                                <input type="email" value={this.state.email} ref={this.email} required placeholder="someone@example.com" className="form-control" onChange={this.onEmailChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor=""> <em>Designation</em></label>
                                <input type="text" value={this.state.designation} ref={this.designation} required placeholder="Enter Designation" className="form-control" onChange={this.onDesignationChange}/>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-md btn-success"><em>Submit</em></button>
                            </div>
                           

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit

