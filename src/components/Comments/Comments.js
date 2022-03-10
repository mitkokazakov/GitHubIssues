import style from './Comments.module.css';

import * as services from '../../services/services';

import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const Comments = () => {

    let {number} = useParams();

    let username = localStorage.username;

    let repo = localStorage.repo;

    const [comments, setComments] = useState([]);

    useEffect(async () => {

        let result = await services.getAllComments(username,repo,number);

        let data = await result.json();

        setComments(data);
    },[]);

  return (

    <div className={style.commentsContainer}>

        <div className={style.commentsHeader}>
            <h2>Comments</h2>
        </div>

        <div className={style.commentsList}>
            {
                comments.length == 0 ? "No comments for this issue" : comments.map(comment => {
                    return <h4 className='mb-5' key={comment.id}>{comment.body}</h4>
                })
            }
            
        </div>
    </div>

  )
}

export default Comments