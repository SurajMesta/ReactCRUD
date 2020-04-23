import React ,{Component} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

const URI="http://localhost:5500"

const Emp=(props)=>{
    const {id, name, email, designation} = props.posts

    return(
  
        
                
                 <div className="col-sm-4">
                    <div className="panel panel-primary" >
                        <div className="panel-heading">
                           
                               <h5  className="panel-title"><em>Id = {id}</em></h5>
                            
                        </div>

                        <div className="panel-body">
                       <h5> <em>Name= {name}</em></h5>
                       <h5> <em>Email= {email}</em></h5>
                       <h5><em>Designation= { designation }</em></h5>
                        </div>

                        <div classNa me="panel-footer" style={{margin:"10px"}}>
                            <Link to={`/edit/${id}`} className="glyphicon glyphicon-edit btn  btn-sm btn-info"></Link>
                            <Link to={`/delete/${id}`} className="btn btn-danger btn-sm glyphicon glyphicon-trash pull-right"></Link>
                               
                            
                        </div>
                    </div>
                </div>
            
                
           
       
    )

}

export default class Home extends Component{

    state={
        emp:[]
    }

    componentDidMount(){
        Axios.get(`${URI}/empdetails`).then(result=>{
            console.log(result)
            console.log(result.data)
            let emp= result.data

            this.setState({emp})
        }).catch(error=>{
            console.log(error)
        })

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="jumbotron text-center">
                            Welcome to the Home Page
                        </h2>
                    </div>
                </div>

                <div className="row">
                    
                    {this.state.emp.map((item)=>{
                    return(
                        <Emp key={item.id} posts={item} />
                    )
                  
                })}
                    
              
                </div>
            </div>
        )
    }
}