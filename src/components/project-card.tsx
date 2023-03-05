import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export const ProjectCard: React.FC = () => {
  return (
    <div className="bg-neutral-500/10 rounded-md cursor-pointer transform hover:scale-[102%] transition-transform hover:ring-1 ring-gray-700">
      <AspectRatio
        ratio={16 / 9}
        className="bg-neutral-400/10 rounded-tl-md rounded-tr-md flex justify-center items-center"
      >
        <p>Insert image here</p>
      </AspectRatio>

      <div className="px-3 py-2">
        <h3 className="text-xl">Insert title here</h3>
        <p className="text-sm text-white/70">Insert short description here</p>
      </div>
    </div>
  );
};