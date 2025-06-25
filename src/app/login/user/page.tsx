import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl">Welcome to SkiBiDi Chatge!</h1>
      <p className="italic">
        Feel free to{" "}
        <Link href="/login/user/register">
          <span className="text-green-400 font-bold cursor-pointer">
            create an account
          </span>
        </Link>
        <span className="text-white font-bold cursor-pointer">
          {" "}
          <span className="cursor-auto">/ </span>{" "}
          <Link href="/login" className="text-red-400">
            {" "}
            Login
          </Link>
        </span>
        <br />
        or <br /> to join the chat as a{" "}
        <Link href="/">
          <span className="text-blue-400 font-bold cursor-pointer">Guest</span>!
        </Link>
      </p>
      <p className="mt-6 text-sm text-gray-400 max-w-md">
        Disclaimer: This is a passion project developed to learn Next.js.
        <br />
        s/o{" "}
        <Link
          href="https://molengeek.com/"
          target="_blank"
          rel="noopener noreferrer">
          <span className="cursor-pointer text-xl">MolenGeek</span>
        </Link>
      </p>
    </div>
  );
}
