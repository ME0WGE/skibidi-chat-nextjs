import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login/user/");
  return null;
}
