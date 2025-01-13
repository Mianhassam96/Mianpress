import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const SAMPLE_ARTICLES = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a new React project with TypeScript and best practices for type safety.",
    author: "Sarah Johnson",
    date: "Mar 15, 2024",
    isLink: false,
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    author: "Michael Chen",
    date: "Mar 14, 2024",
    isLink: true,
  },
];

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleArticleClick = (id: number) => {
    // In a real app, this would navigate to the actual article
    toast({
      title: "Coming Soon",
      description: "Article viewing will be implemented in the next version!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-secondary mb-8">Featured Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_ARTICLES.map((article) => (
            <ArticleCard
              key={article.id}
              {...article}
              onClick={() => handleArticleClick(article.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;