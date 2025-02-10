import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../services/api";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetchArticleById(id).then((data) => setArticle(data.data));
    }
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div>
      <h1>{article.attributes.title}</h1>
      <p>{article.attributes.content}</p>
    </div>
  );
};

export default ArticlePage;
