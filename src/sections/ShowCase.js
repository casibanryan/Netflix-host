import React from 'react'
import videoPreview1 from '../assets/video/video-preview-1.mp4';
import videoPreview2 from '../assets/video/video-preview-2.mp4';
import videoPreviewWebp1 from '../assets/video/video-preview1.webp';
import videoPreviewWebp2 from '../assets/video/video-preview2.webp';
import showCase3 from '../assets/img/bg-showcase-3.jpg'
import poster1 from '../assets/img/video-poster-preview1.jpg';



function ShowCase() {
  return (
    <>
        
    { /*  Showcases*/ }
    <section className="showcase bg-black text-white">
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-lg-6 order-lg-2 text-white showcase-img">
                    <video id="netflixVideo" autoPlay="autoplay" preload="none" muted loop poster={poster1} >
                        <source src={ videoPreviewWebp1 } alt="video-preview-1" type="video/webp" />
                        <source src={ videoPreview1 } alt="video-preview-1" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h1 className="fw-bolder mb-2">Enjoy on your TV.</h1>
                    <p className="lead mb-0 fw-bold">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                        Blu-ray
                        players,
                        and more.</p>
                </div>
            </div>
            <hr />
            <div className="row g-0">
                <div className="col-lg-6 text-white showcase-img">
                    <video autoPlay="autoplay" preload="none"  muted loop> 
                       <source src={ videoPreviewWebp2 } type="video/webp" />
                        <source src={ videoPreview2 } type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="col-lg-6 my-auto showcase-text">
                    <h1 className="mb-2">Download your shows to watch offline.</h1>
                    <p className="lead mb-0 fw-bold">Save your favorites easily and always have something to watch.</p>
                </div>
            </div>
            <hr />
            <div className="row g-0">
                <div className="col-lg-6 col-md-8 showcase-text mx-lg-5" style={{ padding: "4rem" }}>
                    <h1 className="fw-bold mb-2">Watch everywhere.
                    </h1>
                    <p className="lead mb-0 fw-bold">Stream unlimited movies and TV shows on your phone, tablet, laptop, and
                        TV.</p>
                </div>
            </div>
            <hr />

            <div className=" row g-0">
                <div className="col-lg-6 order-lg-2 text-white showcase-img"
                    style={{ backgroundImage: `url(${showCase3})` }}></div>
                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h1 className="mb-2">Create profiles for kids.</h1>
                    <p className="lead mb-0 fw-bold">
                        Send kids on adventures with their favorite characters in a space made just for them—free with
                        your membership.
                    </p>
                </div>
            </div>
        </div>
    </section>
        <hr className="bg-secondary my-5" />
    </>
  )
}

export default ShowCase;