import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f6ff7ea502814ad69737566db50f2bab",
  },
});
