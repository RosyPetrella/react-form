// import articles from "./Articles";

export default function List({ articles }) {
  return (
    <div className="card">
      <div className="card-body">
        <ul>
          {articles.map((article, index) => (
            <li className="card-title" key={index}>
              {article.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
