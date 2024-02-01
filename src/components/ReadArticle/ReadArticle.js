import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ReadArticle(props) {
    const location = useLocation();
    console.log(location.state.name)

    const navigate = useNavigate();

    const handle = () => {
        navigate('/booking', {state:{name:location.state.name, image:location.state.image,summary:location.state.summary, rating:location.state.rating, language:location.state.language}})
      }
    
  return (
    <div className='container mt-4 bg-light'>
        <div className="row">
            <h1 className="text-primary text-center py-3">Product Information</h1>
        </div>
        <div className="row py-4 d-flex align-items-center">
            <div className="col-md-4 col-12">
                <div className="card-img-top">
                    <img src={location.state.image} style={{width:"100%"}} alt=""/>
                </div>
            </div>
            <div className="col-md-8 col-12">
                <div className='container'>
                    <h3 className="text-secondary">Movie Name : <span className="text-dark">{location.state.name}</span></h3>
                    <p>{location.state.summary}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <p><b>{location.state.language}</b></p>
                            <p><b>{location.state.rating}</b></p>
                        </div>
                        <div>
                            <div className='me-4'>
                                <button type="button" class="btn btn-primary" onClick={handle}>Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
