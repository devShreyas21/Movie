import React, { useEffect, useState } from 'react'
import MovieItem from '../MovieItem/MovieItem';

export default function Movie() {

    const [Articles, setArticles] = useState([])

    const update = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        let url = "https://api.tvmaze.com/search/shows?q=all";
        
        // setLoading(true)

        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

        setArticles(parseData)

        // setTotalResults(parseData.totalResults)
        // setLoading(false)
    }

    useEffect( () => {
    
        return () => {
          update()
        }
    },[])

  return (
    <div className='container'>
        <div className='container d-flex justify-content-center'>
            <div>
                <h1 className='text-center'>MadMovies</h1>
                <div className="row d-flex justify-content-center">
                    {Articles.map((element) => {
                        return <div className="col-md-4" key={element.score}>
                            <MovieItem title={!element.show.name ? "Lorem Ipsum" : element.show.name} desc={!element.show.summary ? "..." : element.show.summary} imgUrl={!element.show.image ? "https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg" : element.show.image.original} lang={element.show.language} rate={element.show.rating.average} summary={element.show.summary}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
//  summary={element.show.summary} author={element.author} date={element.publishedAt} source={element.source.name}