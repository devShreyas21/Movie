import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function Booking() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [movieName, setMovieName] = useState('');
    const [movieLang, setMovieLang] = useState('');

    const location = useLocation();

    const confirmBooking = ()=>{
        console.log(name, phone, movieName, movieLang)
    }
    
    

  return (
    <div className='container mx-4 d-flex justify-content-center'>
        <div className="row py-2">
            <div className="row">
                <h1 className="text-center">Check Details & Book</h1>
            </div>
            <div className="row">
                <div className="container py-3 frm">
                   
                         <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input type="text" name="name" className="form-control" value="Shreyas Kshirsagar" onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Phone</label>
                            <input type="text" name="phone" className="form-control" value="8530136842"  onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Movie Name</label>
                            <input type="text" name="movie" className="form-control" value={location.state.name} onChange={(e)=>setMovieName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Movie Language</label>
                            <input type="text" name="lang" className="form-control" value={location.state.language} onChange={(e)=>setMovieLang(e.target.value)} />
                        </div>
                        <button className="btn btn-primary" onClick={confirmBooking}>Confirm Booking</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
