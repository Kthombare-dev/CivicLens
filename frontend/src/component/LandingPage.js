import "./landing.css";

function LandingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <h1>See Your City Clearly.</h1>
        <h2>Fix Civic Issues Faster with CivicLens</h2>
        <p>
          An AI-powered platform that bridges citizens and municipal authorities
          for transparent, efficient civic grievance redressal.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Report an Issue</button>
          <button className="secondary-btn">Sign In</button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps">
        <h3>How CivicLens Works</h3>
        <div className="step-grid">
          <div className="step-card">📸 Report Issue</div>
          <div className="step-card">🤖 AI Categorization</div>
          <div className="step-card">🏛️ Authority Action</div>
          <div className="step-card">✅ Community Validation</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h3>Why CivicLens?</h3>
        <ul>
          <li>AI-powered complaint classification</li>
          <li>Public transparency dashboard</li>
          <li>WhatsApp & SMS accessibility</li>
          <li>Automated escalation system</li>
          <li>Gamification & citizen rewards</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Build Smarter Cities Together</h3>
        <button className="primary-btn">Create Account</button>
      </section>
    </div>
  );
}

export default LandingPage;
