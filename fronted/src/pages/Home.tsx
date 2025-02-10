import { useEffect, useState } from "react";

interface ImageFormat {
  url: string;
}

interface ProfileImage {
  id: number;
  url: string;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
  };
}

interface Article {
  id: number;
  Title: string;
  Content: string;
  Published_Date: string;
  Profile_Image?: ProfileImage[];
}

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/articles?fields=Title,Content,Published_Date&populate=Profile_Image"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);

        if (data.error) {
          setError(data.error.message);
        } else {
          setArticles(data.data || []);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        setError("Failed to fetch articles.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Latest Articles</h1>

      {loading && <p>Loading articles...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {articles.length > 0 ? (
          articles.map((article) => (
            <li key={article.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
              <h2>{article.Title}</h2>
              <p>{article.Content}</p>
              <small>Published: {new Date(article.Published_Date).toDateString()}</small>

              {/* Check if Profile_Image exists and display the first image */}
              {article.Profile_Image && article.Profile_Image.length > 0 && (
                <img
                  src={`http://localhost:1337${article.Profile_Image[0].formats?.small?.url || article.Profile_Image[0].url}`}
                  alt="Article Image"
                  width="300"
                  style={{ display: "block", marginTop: "10px", borderRadius: "8px" }}
                />
              )}
            </li>
          ))
        ) : (
          !loading && <p>No articles available.</p>
        )}
      </ul>

      <footer style={{ marginTop: "20px", textAlign: "center", fontSize: "14px", color: "#666" }}>
        <p>© 2025 News Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
