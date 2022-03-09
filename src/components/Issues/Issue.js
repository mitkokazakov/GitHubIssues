import style from './Issue.module.css'

import Image from '../../images/user.png';

import { Link } from 'react-router-dom';

const Issue = ({issue}) => {

    let currentImage = Image;

    if(issue.assignee != null){

        currentImage = issue.assignee.avatar_url;
    }

    return (


        <div className="card col-md-3 mb-5">

            <div className="card-body">
                <h5 className="card-title">Issue title</h5>
                <p className="card-text"><Link to={`/comments/${issue.number}`}>{issue.title}</Link></p>
                <h5 className="card-title">Assignee : {issue.assignee == null ? "No assignee" : issue.assignee.login}</h5>
                <p className="card-text"><small className="text-muted">Assignee Avatar</small></p>
            </div>

            <div className={style.assigneeAvatar}>
                <img src={currentImage} className="card-img-top" alt="..." />
            </div>
        </div>


    )
}

export default Issue