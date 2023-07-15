import React, {useState} from 'react'
import { BsPlay } from "react-icons/bs";
import countStar from '../js/countStar';
import slide1 from '../assets/img/slide1.png';
import slide3 from '../assets/img/slide3.png';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import '../css/Modal.css';



function Modal({movie, casts}) {
   
  /* Setting the baseUrl to the image.tmdb.org/t/p/original/ and setting the trailerUrl to an empty
  string. */
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const [trailerUrl, setTrailerUrl] = useState("");

    // format number to k ex => 5000 - 5k
    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    // minimize the text in small screen (responsive)
    function truncate(str, n) {
            return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    
     /* The options for the youtube video. */
     const opts = {
      height: '800',
      width: '100%',
        playerVars: {
        autoplay: 1,
        origin: 'http://localhost:3000/home' 
      }
    }


    /**
     * When the user clicks on a movie, if there's already a trailer playing, then set the trailerUrl
     * to an empty string, otherwise, get the trailerUrl from the movieTrailer function and set the
     * trailerUrl to the urlParams.get("v") value.
     * @param movie - the movie object that is passed in from the movie list component
     */
      const handleClick = (movie) => {
                if(trailerUrl) {
                    setTrailerUrl('');
                }
                else {
                    movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
                    .then(url => {
                        //get everything after the  ?
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get("v"));
                    }).catch((error) => alert('no video available sorry, Trg again later!'));
                    }
                };

     // pause the video if clicked
    const handleClose = () => {
        setTrailerUrl('');
    };

  return (
      <>
        <div className="modal fade" id={`staticBackdrop${movie.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content bg__dark">
                    <div className="modal-header" style={{ borderBottom:"none"}}>
                    <button type="button" className="btn-close btn-lg bg-danger" id="closeButton" onClick={() => handleClose()} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div className="modal-body mt-lg-5 mt-md-5">

            {/* It's a conditional rendering. If the trailerUrl is true, then render the YouTube
             component. */}
                  {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                    <section className="hero-area" id="home">
                        <div className="container mt-md-5 mt-lg-5">
                            <div className="hero-area-slider">
                                <div className="row hero-area-slide">
                                    <div className="col-lg-6 col-md-5">
                                        <div className="hero-area-content pb-3">
                                            <img src={`${baseUrl}${movie?.poster_path || movie?.backdrop_path}`} 
                                               style={{ maxWidth: "100%", height:"auto"}}
                                               alt={movie?.name || movie?.title} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-7">
                                        <div className="hero-area-content pr-50 mt-lg-5 mt-md-5">
                                            <h2> {movie?.title || movie?.name || movie?.original_name}</h2>
                                            <div className="review">
                                              
                                                {/* detecting the rating (star) of the movies */}
                                                {countStar.map((star, index) => (
                                                    <div className="author-review" key={index}>
                                                       {
                                                        movie.vote_count > 1000 ? star.veryHigh : 
                                                        movie.vote_count < 1000 && movie.vote_count > 500 ? star.high :
                                                        movie.vote_count < 500 && movie.vote_count > 100 ? star.medium : star.low
                                                       }
                                                    </div>
                                                ))}
                                            
                                                <h4> {kFormatter(movie.vote_count)} voters</h4>
                                            </div>  
                                            <p> {truncate(movie.overview, 450)} </p>
                                            <h3>Cast:</h3>
                                            <div className="slide-cast">
                                                {
                                                    casts.map((cast, index) => (
                                                        <div className={`single-slide-cast ${index >= 7 ? 'd-none' : ""}`} key={index}>
                                                            <img src={`${baseUrl}${cast.profile_path}`} alt={cast.name} style={{height:50, width:50}} />
                                                        </div>
                                                    ))
                                                }
									<div className="single-slide-cast text-center">
										5+
									</div>
								</div>
								<div className="slide-trailor">
									<h3>Watch Trailer</h3>
									<a className="theme-btn theme-btn2 text-decoration-none fw-bold"  onClick={() => handleClick(movie)}>
                                        <BsPlay size={28} />  Play
                                    </a>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div className="hero-area-thumb">
					<div className="thumb-prev w-100">
						<div className="row hero-area-slide">
							<div className="col-lg-6">
								<div className="hero-area-content">
									<img src={slide3} alt="side3" />
								</div>
							</div>
						</div>
					</div>
					<div className="thumb-next w-100">
						<div className="row hero-area-slide">
							<div className="col-lg-6">
								<div className="hero-area-content">
                                  	<img src={slide1} alt="side1" />
								</div>
							</div>
						</div>
					</div>
                    </div>
                </div>
             </section>
        </div>
        </div>
    </div>
    </div>
    </>      
  )
}

export default Modal;