export const BlogCard: React.FC = () => {
  return (
    <div className="bg-neutral-500/10 rounded-md cursor-pointer transform hover:scale-[102%] transition-transform hover:ring-1 ring-gray-700">
      <div className="px-4 py-3">
        <h3 className="text-xl">This is a card for a blog post</h3>
        <p className="text-white/60">Month Dayth, Yearth</p>
        <hr />
        <p className="text-white/80">Insert a blurb here</p>
      </div>
    </div>
  );
};
