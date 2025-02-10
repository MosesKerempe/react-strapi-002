import { Link } from "react-router-dom";

const ArticleCard = ({ article }: { article: any }) => {
  return (
    <div>
      <h2>{article.attributes.title}</h2>
      <p>{article.attributes.description}</p>
      <Link to={`/articles/${article.id}`}>Read More</Link>
    </div>
  );
};

export default ArticleCard;
