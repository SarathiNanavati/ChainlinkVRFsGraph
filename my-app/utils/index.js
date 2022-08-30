import axios from "axios";

export async function subgraphQuery(query) {
   try {
      const SUBGRAPH_URL = "https://api.thegraph.com/subgraphs/name/sarathinanavati/learnweb3";
      const response = await axios.post(SUBGRAPH_URL, {
         query,
      });
      // console.log(Date.now())
      // console.log("Query", query);
      console.log("Respone", response);
      if (response.data.errors) {
         console.error(response.data.errors);
         throw new Error(`Error making subgraph query ${response.data.errors}`);
      }
      return response.data.data;
   } catch (err) {
      console.error(err);
      throw new Error(`Could not query the subgraph ${err.message}`);
   }
}
