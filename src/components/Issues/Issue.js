import style from './Issue.module.css'

import Image from '../../images/user.png';

const Issue = ({issue}) => {

    if(issue.assignee != null){
        Image = issue.assignee.avatar_url;
    }

    return (


        <div class="card col-md-3 mb-5">

            <div class="card-body">
                <h5 class="card-title">Issue title</h5>
                <p class="card-text">{issue.title}</p>
                <h5 class="card-title">Assignee : {issue.assignee == null ? "No assignee" : issue.assignee.login}</h5>
                <p class="card-text"><small class="text-muted">Assignee Avatar</small></p>
            </div>

            <div className={style.assigneeAvatar}>
                <img src={Image} class="card-img-top" alt="..." />
            </div>
        </div>


    )
}

export default Issue