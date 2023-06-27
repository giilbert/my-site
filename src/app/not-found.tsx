import { FrownIcon } from "lucide-react";

export default function FourOhFourPage() {
  return (
    <div>
      <div className="flex gap-2 items-center mb-2">
        <FrownIcon />
        <h1 className="text-3xl font-medium">404: Page not found</h1>
      </div>
      <p>(probably because this site is unfinished)</p>
    </div>
  );
}
