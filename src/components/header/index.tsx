import { BsDiscord, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Name } from "./name";
import { MapPinIcon } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="md:flex items-center">
      <div>
        <Name />
        <p className="mt-2 text-muted-foreground">
          Software Engineer · High School Student
        </p>
      </div>

      <div className="mt-4 md:mt-0 md:ml-auto w-min flex flex-col md:items-end gap-2">
        <div className="flex gap-3 items-center text-muted-foreground">
          <a
            href="mailto:example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            mail@example.com
          </a>

          <BsGithub size={20} />
          <BsLinkedin size={20} />
          <BsInstagram size={20} />
          <BsDiscord
            size={20}
            className="hover:text-foreground transition-colors"
          />
        </div>

        <div className="flex gap-1 items-center text-muted-foreground">
          <MapPinIcon size={16} />
          <p>New York City</p>
        </div>
      </div>
    </header>
  );
};
