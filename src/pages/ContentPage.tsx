import React from 'react';

const ContentPage: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <h1>Our Services</h1>
      
      <section aria-labelledby="services-heading">
        <h2 id="services-heading">What We Offer</h2>
        
        <div className="card-container">
          <article className="card" aria-labelledby="web-accessibility-heading">
            <img 
              src="/images/web-accessibility.jpg" 
              alt="" 
              aria-hidden="true"
            />
            <div className="card-content">
              <h3 id="web-accessibility-heading">Web Accessibility Audits</h3>
              <p>We evaluate your website against WCAG 2.1 AA standards.</p>
            </div>
          </article>
          
          <article className="card" aria-labelledby="training-heading">
            <img 
              src="/images/training.jpg" 
              alt="" 
              aria-hidden="true"
            />
            <div className="card-content">
              <h3 id="training-heading">Accessibility Training</h3>
              <p>Training sessions for your developers and content creators.</p>
            </div>
          </article>
          
          <article className="card" aria-labelledby="remediation-heading">
            <img 
              src="/images/remediation.jpg" 
              alt="" 
              aria-hidden="true"
            />
            <div className="card-content">
              <h3 id="remediation-heading">Remediation Services</h3>
              <p>We help fix accessibility issues in your existing website.</p>
            </div>
          </article>
        </div>
      </section>
      
      <section aria-labelledby="chart-heading">
        <h2 id="chart-heading">Our Impact</h2>
        <div className="chart" aria-hidden="true" role="img" aria-label="Bar chart showing our impact over the last 3 years">
          {/* This would be a visual chart component */}
          <p className="sr-only">
            Bar chart showing 30% growth in 2021, 45% growth in 2022, and 60% growth in 2023.
          </p>
        </div>
      </section>
      
      <section aria-labelledby="video-heading">
        <h2 id="video-heading">Learn About Accessibility</h2>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/20SHvU2PKsM?si=PczJNwTCS0pkUv_D" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <p>
            <a href="/transcripts/accessibility-video.txt">Video transcript</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContentPage;