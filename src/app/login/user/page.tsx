export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl">Welcome to SkiBiDi Chatge!</h1>
      <p className="italic">
        Feel free to{" "}
        <span className="text-green-400 cursor-pointer">create an account</span>{" "}
        <br />
        or <br /> to join the chat as a{" "}
        <span className="text-blue-400 cursor-pointer">Guest</span>!
      </p>
    </div>
  );
}
