import React from 'react'

const Form = () => {
    return (
        <div className='mt-5 mb-5'>
            <form>
                <div className="form-row d-flex justify-content-around">
                    <div className="form-group col-md-4">
                        <label className='mb-2' htmlFor="username">Username</label>
                        <input type="email" className="form-control" id="username" placeholder="Username..." name='username' />
                    </div>
                    <div className="form-group col-md-4">
                        <label className='mb-2' htmlFor="repo">Repo</label>
                        <input type="text" className="form-control" id="repo" placeholder="Repo Name..." name='repo' />
                    </div>
                </div>

                <button type="submit" className="btn btn-success mt-4">Send</button>
            </form>
        </div>
    )
}

export default Form