import style from './Issues.module.css';

import Issue from './Issue';

const Issues = ({allIssues}) => {

  return (

    <div className={style.issuesContainer}>
        <h2 className='mb-3'>List of All Issues</h2>

        <div className="row d-flex justify-content-around">
                {
                  allIssues.length == 0 ? "No issues" : allIssues.map(issue => {
                    return <Issue key={issue.id} issue={issue}/>
                  })
                }
        </div>

    </div>

  )
}

export default Issues;