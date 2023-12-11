import React, { useEffect, useState } from "react";

const EditorInsights = ({ id }) => {
  // console.log(id);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`https://the-news-dragon-server-1bqd2sont-ahsanulhoqueabir.vercel.app/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  });
  return (
    <div className="my-10">
      <h2 className="text-lg font-bold">Editors Insight</h2>
      <div>
        {news.slice(0, 3).map((item) => {
            // console.log(item);
          <div>
            <h2>{item.title}</h2>
            <p>{item.details}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default EditorInsights;
