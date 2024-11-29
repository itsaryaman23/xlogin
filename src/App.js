import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.elements.user.value === "user" &&
      e.target.elements.password.value === "password"
    ) {
      document.getElementsByTagName("form")[0].style.display = "none";
      document.getElementById("msg").innerText = "Welcome, user!";
      document.getElementById('msg').style.color = "white";
      document.getElementById('msg').style.fontSize = "50px";
      document.getElementById('msg').style.fontWeight = "500";
      document.getElementsByClassName('head')[0].style.display = "none";
    } else
      document.getElementById("msg").innerText =
        "‼️ Invalid username or password ‼️";
  };
  return (
    <div className="App">
      <h1 className="head">Login Page</h1>
      <p id="msg">
        <br />
      </p>
      <form onSubmit={handleSubmit}>
        {/* <label for="username">Username:</label><br /> */}
        <input id="username" placeholder="Username" name="user" required />
        <br />
        {/* <label for="password" >Password:</label><br /> */}
        <input
          id="username"
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <br />
        <button type="submit" id="subBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
