
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Issues from './components/Issues/Issues';

import * as services from './services/services';

import { useState,useEffect } from 'react';

function App() {

  const [issues, setIssues] = useState([]);

  useEffect(async () =>{
      let data = await services.getAllIssues("ivaylokenov","MyTested.AspNetCore.Mvc");

      setIssues(data);

  },[]);

  return (
    <div className="App">
      <Header />
      <Form />
      <Issues allIssues = {issues} />
    </div>
  );
}

export default App;
