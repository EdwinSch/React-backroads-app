const Signup = () => {
  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    event.target[0].value = "";
  };

  return (
    <section className="signup-section">
      <h4>sign up for our newsletter</h4>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" required />
        <button type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </section>
  );
};

export default Signup;
