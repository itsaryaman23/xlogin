
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.elements.user.value==="user" && e.target.elements.password.value === "password")
      {
        document.getElementsByTagName('form')[0].style.display = "none";
      document.getElementById('msg').innerText = "Welcome, user!";
    }
  else
  document.getElementById('msg').innerText = "‼️ Invalid username or password ‼️";
  }
  return (
    <div className="App">
      <h1>Login Page</h1>
      <p id="msg"><br /></p>
      <form onSubmit={handleSubmit}>
        <label for="username">Username:</label>
        <input id="username" name="user" required/>
        <br />
        <label for="password" >Password:</label>
        <input id="username" type="password" name="password" required/>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
