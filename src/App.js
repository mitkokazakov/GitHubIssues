
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Issues from './components/Issues/Issues';
import Comments from './components/Comments/Comments';

import * as services from './services/services';

import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

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

      let result = await services.getAllIssues(input.username, input.repo);

      if (result.status != 200) {
        return alert("Invalid username or repository name. Try again!");
      }

      let data = await result.json();

      setIssues(data);
    }

  }, [input]);

  localStorage.setItem("issues", JSON.stringify(issues));

  localStorage.setItem("username", input.username);

  localStorage.setItem("repo", input.repo);

  return (
    <div className="App">
      <Header />
      <Form sendButtonHandler={getInput} />
      <Routes>
        {/* <Issues path="/" allIssues={issues} /> */}
        <Route path="/issues" exact element={<Issues />}></Route>
        <Route path="/comments/:number" exact element={<Comments />}></Route>
      </Routes>

    </div>
  );
}

export default App;
