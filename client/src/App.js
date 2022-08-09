import './App.css';
import axios from "axios"
import {useEffect, useState} from "react";


function App() {

  const DISCORD_OAUTH2_URL = "https://discord.com/api/oauth2/authorize?client_id=1004597949369692180&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fauth%2Fdiscord&response_type=code&scope=identify"

  const [user, setUser] = useState();

  useEffect(() => {
    (async function () {
      const user = await axios
        .get(`http://localhost:4000/api/me`, {
          withCredentials: true,
        })
        .then((res) => res.data);

      console.log(user)
      // setUser(user.data);
    })();
  }, []);

  return (
    <div>
      <a style={{
        margin: "10rem"
      }}
         href={DISCORD_OAUTH2_URL}>login
        with discord
      </a>

    </div>
  );
}

export default App;
