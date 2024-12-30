import axios from "axios";
 export const foodLoader = async () => {
    try {
      const response = await axios.get(
        "https://tasty.p.rapidapi.com/recipes/list",
        {
          params: {
            from: "0", // Starting index
            size: "20", // Number of items to fetch
          },
          headers: {
            "X-RapidAPI-Key": "20d4d1bec9msh69cc707d26a6f2ep12529djsndef7467236a3",
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
          },
        }
      );
      return response.data.results;
    } catch (error) {
      console.error("Error fetching Tasty recipes:", error);
      return [];
    }
  };