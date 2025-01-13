import { Button } from "@/components/ui/button";
import { PenSquare, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-primary hover:text-primary/90 transition-colors font-serif">
          MianPress
        </Link>
        <div className="flex gap-4">
          <Button asChild variant="ghost">
            <Link to="/new-link" className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4" />
              Save Link
            </Link>
          </Button>
          <Button asChild>
            <Link to="/new-article" className="flex items-center gap-2">
              <PenSquare className="w-4 h-4" />
              Write Article
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};