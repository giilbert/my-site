import { BlogPostMeta } from "@/lib/blog";
import Link from "next/link";

export const BlogPostCard: React.FC<{ meta: BlogPostMeta }> = ({ meta }) => {
  return (
    <Link href={`/blog/${meta.slug}`} key={meta.slug}>
      <div className="border px-3 py-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-medium">{meta.title}</h2>
          <p className="text-muted-foreground">
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "short",
            }).format(meta.written)}{" "}
            · {meta.readTime} read
          </p>
        </div>
        <p>{meta.description}</p>

        <div className="flex gap-1 mt-1">
          {meta.tags.map((tag) => (
            <span
              className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs hover:text-foreground transition-colors hover:underline"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
