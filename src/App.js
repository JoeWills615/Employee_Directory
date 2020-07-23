import React, {useState,useEffect} from "react";
import API from "./utils/API"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron/Jumbotron';
import Employee from './components/Employee/Employee';
import Wrapper from './components/Wrapper';
import SearchBar from './components/Searchbar/SearchBar';


function App() {
  const [employees, setEmployees] = useState([])
useEffect(() => {
    API.getUsers()
    .then((res) => {
      if(!employees.length){
        setEmployees(res.data.results)
        console.log (employees)
      }
       
    })
    .catch(err => {
      console.log (err)
    })
   
},[employees, setEmployees])
  return (
    <Router>
        <div>
          <Jumbotron />
          <SearchBar />
          <br />
          <Wrapper>
          <Employee users={employees}/>
          </Wrapper>
        </div>
    </Router>
  );
}

export default App;
