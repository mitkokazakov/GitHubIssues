import style from './Issue.module.css'

const Issue = () => {

    return (


        <div class="card col-md-3">

            <div class="card-body">
                <h5 class="card-title">Issue title</h5>
                <p class="card-text">Last updated 3 mins ago Last updated 3 mins ago Last updated 3 mins ago</p>
                <h5 class="card-title">Assignee : AntoniyaAT</h5>
                <p class="card-text"><small class="text-muted">Assignee Avatar</small></p>
            </div>

            <div className={style.assigneeAvatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywehz1y1ECdX9-lbA61E3sU3XeRfMcHg2zghuy4B8tsCUKG9kKJ4bwxIbOYXSQ43brgc&usqp=CAU" class="card-img-top" alt="..." />
            </div>
        </div>


    )
}

export default Issue