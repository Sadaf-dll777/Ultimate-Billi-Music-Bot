module.exports = {
  token: "",
  prefix: ">",
  ownerID: ["280759048477999106"],
  SpotifyID: "YOUR_SPOTIFY_ID",
  SpotifySecret: "YOUR_SPOTIFY_SECRET",
  mongourl: "",
  color: "#00D4FF",
  logs: "",
  node_source: "ytmsearch",

  links: {
    BG: "",
    support: "https://discord.gg/your-invite-code",
    invite: "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands",
    Shafed_Billa: "On Top??",
    power: "Powered By Kala Billa Development",
    vanity: "https://discord.gg/your-vanity-url",
    guild: "YOUR_GUILD_ID",
  },

  Webhooks: {
    black: "",
    player_create: "",
    player_delete: "",
    guild_join: "",
    guild_leave: "",
    cmdrun: "",
  },

  nodes: [
    {
      name: "Sadaf",
      url: "45.13.236.245:25842",
      auth: "sadaf",
      secure: false
    }
  ],

  node_options: {
    moveOnDisconnect: false,
    resume: true,
    resumeTimeout: 60,
    resumeByLibrary: true,
    reconnectTries: 5,
    reconnectInterval: 5,
    restTimeout: 60000,
    voiceConnectionTimeout: 30000,
    userAgent: "Safed Billa",
  },
};