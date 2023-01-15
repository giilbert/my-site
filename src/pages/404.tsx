import { NextPage } from "next";
import { useRouter } from "next/router";

const FourOhFourPage: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center mx-4 items-center h-screen">
      <main className="text-center w-[52rem] flex justify-center flex-col">
        <div className="flex justify-center">
          <h1 className="text-[4rem] sm:text-[5rem] md:text-[6rem] font-extrabold mb-4 whitespace-pre">
            404
          </h1>

          <div className="animate-blink ml-2 mt-4 sm:mt-6 bg-neutral-600 w-3 md:w-4 h-[4rem] sm:h-[5rem] md:h-[6rem]" />
        </div>

        <p className="text-lg">Page not found.</p>

        <p
          className="text-blue-400 mt-4 cursor-pointer hover:scale-105 transition-all hover:underline"
          onClick={() => router.back()}
        >
          Go back
        </p>
      </main>
    </div>
  );
};

export default FourOhFourPage;
