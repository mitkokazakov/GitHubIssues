import style from './Issues.module.css';

import Issue from './Issue';
import { useState,useEffect } from 'react';

const Issues = () => {

  const [allIssues,setAllIssues] = useState([]);

useEffect(() => {

  let issues = JSON.parse(localStorage.issues);

  setAllIssues(issues);

},[allIssues]);
  
  return (

    <div className={style.issuesContainer}>
      <h2 className='mb-3'>List of All Issues</h2>

      <div className="row d-flex justify-content-around">
        {
          allIssues.length == 0 ? "No issues" : allIssues.map(issue => {
            return <Issue key={issue.id} issue={issue} />
          })
        }
      </div>

    </div>

  )
}

export default Issues;