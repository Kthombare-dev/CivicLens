import "./auth.css";

function SignInPage({ onSwitch }) {
  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="signup-title">Sign In</h2>
        <p className="signup-subtitle">
          Welcome back to CivicLens
        </p>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="signup-btn">Sign In</button>

        <div className="signup-footer">
          Don’t have an account?{" "}
          <span onClick={onSwitch}>Create Account</span>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
