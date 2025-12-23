import "./auth.css";

function SignUpPage({ onSwitch }) {
  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">
          Join CivicLens and raise your voice
        </p>

        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Create password" />
        </div>

        <button className="signup-btn">Create Account</button>

        <div className="signup-footer">
          Already have an account?{" "}
          <span onClick={onSwitch}>Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
