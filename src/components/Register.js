const Register = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <h1>Register User</h1>
        <label>
          <input type="text" placeholder="Name" />
        </label>
        <label>
          <input type="text" placeholder="Email" />
        </label>
        <label>
          <input type="text" placeholder="Password" />
        </label>
        <button className="register-btn">
          <p>Register</p>
        </button>
      </form>
    </div>
  );
};

export default Register;