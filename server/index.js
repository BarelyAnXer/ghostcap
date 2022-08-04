import 'dotenv/config'
import express from "express";
import axios from "axios"
import url from "url"

const app = express();

const PORT = process.env.PORT || 5000

app.get("/api/auth/discord/", async (req, res) => {
  const {code} = req.query

  if (code) {
    try {
      const formData = new url.URLSearchParams({
        'client_id': process.env.DISCORD_OAUTH_CLIENT_ID,
        'client_secret': process.env.DISCORD_OAUTH_CLIENT_SECRET,
        'grant_type': "authorization_code",
        'code': code.toString(),
        'redirect_uri': "http://localhost:5000/api/auth/discord"
      })

      const response = await axios.post("https://discord.com/api/v10/oauth2/token", formData.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      const {access_token, refresh_token} = response.data;

      const userResponse = await axios.get("https://discord.com/api/v10/users/@me", {
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      })

      res.send(userResponse.data)

    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

});

// app.get("/api/auth/user", async (req, res) => {
//   try {
//     const userResponse = await axios.get("https://discord.com/api/v10/users/@me", {
//       headers: {
//         "Authorization": `Bearer ${access_token}`
//       }
//     })
//
//     res.send(response.data)
//
//   } catch (error) {
//     res.send(400)
//   }
//
// })


app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`)
})