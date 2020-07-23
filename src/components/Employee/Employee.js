import React from "react";
import API from "../../utils/API"


    export default class Employee extends React.Component {
        state = {users:[]}
        componentDidMount() {
            API.getUsers().then(results => {
              this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
              }); console.log (results)            });
          }    
        render (){ return (
        <div className="container">
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                            <tbody>
                               {this.state.users.forEach(user => {
                                   return( 
                                   <tr>
                                        <th scope="row">photo</th>
                                        <td>Firstname Lastname</td>
                                        <td>###-###-####</td>
                                        <td>email@email.com</td>
                                    </tr>)})
        }  
                            </tbody>
                </table>
            </div>
        </div>
    )
    }}

