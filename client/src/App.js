import './App.css';
import axios from "axios"


function App() {
  return (
    <div>
      <a style={{
        margin: "10rem"
      }}
         href="https://discord.com/api/oauth2/authorize?client_id=1004597949369692180&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fauth%2Fdiscord&response_type=code&scope=identify">login
        with discord
      </a>

    </div>
  );
}

export default App;
