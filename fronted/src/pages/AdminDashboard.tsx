import { useEffect, useState } from "react";
import { getArticles} from "../services/api";

const AdminDashboard = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data.data));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table style={{ border: "1px solid black", width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{article.id}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{article.attributes.title}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
