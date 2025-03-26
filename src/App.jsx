import { useState } from "react";
import List from "./List";
import Form from "./Form";
import articlesData from "./Articles";

export default function App() {
  const [articles, setArticles] = useState(articlesData);
  const handleAddArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-3 mb-3">Curiosità sui gatti</h1>
        <List articles={articles} />
        <Form onAddArticle={handleAddArticle} />
      </div>
    </>
  );
}
