import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Heart } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  isLink?: boolean;
  onClick: () => void;
}

export const ArticleCard = ({ title, excerpt, author, date, isLink, onClick }: ArticleCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={onClick}>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          {isLink && <span className="text-primary">[External Link]</span>}
          <span>{author}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {date}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-secondary hover:text-primary transition-colors">
          {title}
        </h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" className="gap-2">
          <Heart className="w-4 h-4" />
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};