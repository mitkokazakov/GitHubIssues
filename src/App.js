
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Issues from './components/Issues/Issues';

import * as services from './services/services';

import { useState, useEffect } from 'react';

function App() {

  const [issues, setIssues] = useState([]);

  const [input, setInput] = useState({
    username: "",
    repo: ""
  });

  const getInput = (username, repo) => {

    let currentInput = {
      username: username,
      repo: repo
    }

    setInput(currentInput);
  }

  useEffect(async () => {

    if (input.username != "" && input.repo != "") {

      let data = await services.getAllIssues(input.username, input.repo);

      setIssues(data);
    }

  }, [input]);

  return (
    <div className="App">
      <Header />
      <Form sendButtonHandler={getInput} />
      <Issues allIssues={issues} />
    </div>
  );
}

export default App;
