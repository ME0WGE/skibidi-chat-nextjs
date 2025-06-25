export default function Page() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl">Welcome to SkiBiDi Chatge!</h1>
      <p className="italic">
        Feel free to{" "}
        <span className="text-green-400 cursor-pointer">create an account</span>
        <br />
        or <br /> to join the chat as a{" "}
        <span className="text-blue-400 cursor-pointer">Guest</span>!
      </p>
      <p className="mt-6 text-sm text-gray-400 max-w-md">
        Disclaimer: This is a passion project developed to learn Next.js.
        <br />
        s/o <span className="cursor-pointer text-xl">MolenGeek</span>
      </p>
    </div>
  );
}
