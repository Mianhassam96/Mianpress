import { ArticleCard } from "@/components/ArticleCard";

const SAMPLE_ARTICLES = [
  {
    id: 1,
    title: "Building a Full-Stack Application with React and Node.js",
    excerpt: "Learn how to create a complete web application using React for the frontend and Node.js for the backend...",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "2024-01-13",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Database Design Best Practices for Modern Applications",
    excerpt: "Explore essential database design principles and learn how to structure your data for scalability...",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "2024-01-12",
    author: "Jane Smith"
  },
  {
    id: 3,
    title: "Implementing Authentication in Your Full-Stack App",
    excerpt: "A comprehensive guide to adding secure user authentication to your web application...",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    date: "2024-01-11",
    author: "Mike Johnson"
  }
];

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Full-Stack Development Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_ARTICLES.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            excerpt={article.excerpt}
            image={article.image}
            date={article.date}
            author={article.author}
          />
        ))}
      </div>
    </div>
  );
}