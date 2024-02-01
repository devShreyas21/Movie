import React from 'react'
import './MovieItem.css';
// import read from '../read/read';
import ReadArticle from '../ReadArticle/ReadArticle';
import { Link, useNavigate } from 'react-router-dom';

export default function MovieItem(props) {
    const navigate = useNavigate();

    let { title, imgUrl, lang, rate, summary} = props;

    const handle = () => {
      navigate('/read', {state:{name:title, image:imgUrl,summary:summary, rating:rate, language:lang}})
    }

  return (
    <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          
          <div className='image-container'>
            <img src={imgUrl} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className='row d-flex'>
                <div>
                    <p className="card-text">Language : <b>{lang}</b></p>
                </div>

                <div>
                    <p className="card-text">Rating : <b>{rate}</b></p>
                </div>
            </div>
            <br />

            <button type="button" class="btn btn-primary" onClick={handle}>Primary</button>


            {/* <Link to="/read" className="btn btn-primary">Read More</Link> */}
          </div>
        </div>
    </div>
  )
}



    

    