import React, { useState } from "react";

function Form() {
  const [results, setResults] = useState([]);

  const [search, setSearch] = useState("");

  let image = [];
  let obj = {};
  let metatags = [];

  const url = `https://customsearch.googleapis.com/customsearch/v1?cx=10bf1d2c4ec5b442c&q=${search}&key=AIzaSyAvXfaowZdd_Tduo2wXxce-sW0tO1IGn_I`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(url).then((response) => response.json());
      setResults(data.items);
      for (const element of results) {
        for (let i = 0; i < results.length; i++) {
          obj = {
            title: element?.title[i] || "No title found",
            snippet: element?.snippet[i] || "No snippet found",
            link: element.link[i] || "No link found",
            image: element?.pagenap.cse_image[0]?.src[i] || "No image found",
            metatags: element?.pagemap?.metatags[i] || "No metatags found",
          };
        }
      }
      console.log(obj);
    } catch (error) {
      console.log("handleSubmit error : ", error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Type what to search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
        {/* {results.map((result, index) => (
          <div key={Math.random() + Math.random() * Math.random()}>
            <p>Ranking : {index + 1}</p>
            <h3>Title : {result.title}</h3>
            <p>Snippet : {result.snippet}</p>
            <p>Link : {result.displayLink}</p>
          </div>
        ))} */}
      </form>
    </div>
  );
}

export default Form;
