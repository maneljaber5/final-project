import React from 'react'

function Home() {
  return (
    <>
 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/slide3.jpg" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Beautiful hair is a never ending quest</h2><hr />
            <p>Hydrate, protect and revive your hair by using our best styling products. Curl and create volume. </p>
            <div className="sg-slider__button"><a className="sg-slider__link" href="http://vegathemes.net/beauty-center/main/">READ MORE</a></div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/slide2.jpg" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Be bold. Be daring. Be simply beautiful.</h2><hr />
            <p>Behind every beautiful women is a hairdresser that loves her! </p>
            <div className="sg-slider__button"><a className="sg-slider__link" href="http://vegathemes.net/beauty-center/main/">READ MORE</a></div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/slide1.jpg" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h2>Because you need time for yourself</h2><hr />
            <p>An oasis of calm, our Beauty Center is a place to enjoy peace and serenity and to restore mind, body and soul </p>
            <div className="sg-slider__button"><a className="sg-slider__link" href="http://vegathemes.net/beauty-center/main/">READ MORE</a></div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only" />
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only" />
      </a>
    </div>
    <section className="about">
          <div className="photo">
            <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/about.jpg" alt="" />
          </div>
          <div className="about-us">
            <h2 className="sg-imagetext__title">About Us</h2><hr />
            <p>Peaceful spa treatments for deep relaxation of the mind, reducing stress and life changing services. Whether you want to feel better in yourself, are attending a work or family event or maybe have a wedding come around, we have the treatments you need to look your best and feel amazing. </p>
            <a className="sg-imagetext__link" href="https://vegathemes.net/beauty-center/main/">READ MORE</a>
          </div>
        </section>
        <section className="service">
          <div className="title">
            <h2 className="sg-imagetext__title">
              Our Services
            </h2><hr />
          </div>
          <div className="liste">
            <div className="photo1">
              <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/thumb13-3.jpg" />
              <span />
              <h3>Make-up &amp; Nails</h3>
              <p>We offer professional makeup and nails services with a look customized just for you.</p>
              <a className="sg-imagetext__link" href="https://vegathemes.net/beauty-center/main/">VIEW DETAILS</a>
            </div>
            <div className="photo2">
              <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/thumb13-1.jpg" />
              <span />
              <h3>Hair &amp; Treatments </h3>
              <p>Hydrate, protect and revive your hair by using our best styling products. Curl and create volume.</p>
              <a className="sg-imagetext__link" href="https://vegathemes.net/beauty-center/main/">VIEW DETAILS</a>
            </div>
            <div className="photo3">
              <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/thumb13-4.jpg" />
              <span />
              <h3>Massage &amp; Wellness</h3>
              <p>Peaceful spa treatments for deep relaxation of the mind, reducing stress and life changing services.</p>
              <a className="sg-imagetext__link" href="https://vegathemes.net/beauty-center/main/">VIEW DETAILS</a>
            </div>
          </div>
        </section>
        </>
  )
}

export default Home