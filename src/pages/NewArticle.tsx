import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export default function NewArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageUrl(base64String);
        // Copy image URL to clipboard
        navigator.clipboard.writeText(base64String).then(() => {
          toast({
            title: "Image URL copied!",
            description: "The image URL has been copied to your clipboard.",
          });
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the article
    toast({
      title: "Article created!",
      description: "Your article has been successfully saved.",
    });
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Write a Full-Stack Development Article</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your article title"
            className="w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium mb-2">
            Cover Image
          </label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
          />
          {imageUrl && (
            <div className="mt-4">
              <img
                src={imageUrl}
                alt="Preview"
                className="max-w-md rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            Content
          </label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your article content here..."
            className="min-h-[400px]"
            required
          />
        </div>

        <div className="flex gap-4">
          <Button type="submit">Publish Article</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}