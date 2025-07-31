import React from 'react';

const AccessibilityStatement: React.FC = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <article>
        <h1>Accessibility Statement</h1>
        
        <section aria-labelledby="commitment-heading">
          <h2 id="commitment-heading">Our Commitment</h2>
          <p>
            We are committed to ensuring digital accessibility for people with disabilities. 
            We are continually improving the user experience for everyone and applying 
            the relevant accessibility standards.
          </p>
        </section>
        
        <section aria-labelledby="conformance-heading">
          <h2 id="conformance-heading">Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for 
            designers and developers to improve accessibility for people with disabilities. 
            This website is partially conformant with WCAG 2.1 level AA.
          </p>
        </section>
        
        <section aria-labelledby="feedback-heading">
          <h2 id="feedback-heading">Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of this website. 
            Please let us know if you encounter accessibility barriers:
          </p>
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email: accessibility@example.com</li>
            <li>Postal address: 123 Accessibility St, City, Country</li>
          </ul>
        </section>
        
        <section aria-labelledby="technical-heading">
          <h2 id="technical-heading">Technical Specifications</h2>
          <p>
            Accessibility of this website relies on the following technologies:
          </p>
          <ul>
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default AccessibilityStatement;