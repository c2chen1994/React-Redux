import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 31fecb1fc173093b3f31111e5e169498e1c061bc3fbea826161f1e1718a786ca"
  }
});
