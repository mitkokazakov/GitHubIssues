import style from './Issues.module.css';

import Issue from './Issue';

const Issues = () => {

  return (

    <div className={style.issuesContainer}>
        <h2 className='mb-3'>List of All Issues</h2>

        <div className="row d-flex justify-content-around">
                <Issue />
                <Issue />
                <Issue />
                <Issue />
        </div>

    </div>

  )
}

export default Issues;