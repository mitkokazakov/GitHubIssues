import React from 'react'

import { useState } from 'react'

const Form = ({sendButtonHandler}) => {

    const [username, setUsername] = useState("");

    const [repoName, setRepoName] = useState("");

    return (
        <div className='mt-5 mb-5'>
            <form>
                <div className="form-row d-flex justify-content-around">
                    <div className="form-group col-md-4">
                        <label className='mb-2' htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Username..." name='username' onChange={event => setUsername(event.target.value)}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label className='mb-2' htmlFor="repo">Repo</label>
                        <input type="text" className="form-control" id="repo" placeholder="Repo Name..." name='repo' onChange={event => setRepoName(event.target.value)} />
                    </div>
                </div>

                
            </form>

            <a className="btn btn-success mt-4" onClick={() => (sendButtonHandler(username, repoName))}>Send</a>
        </div>
    )
}

export default Form