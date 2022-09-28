import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="max-w-3xl mx-auto flex items-center justify-between py-5">
      <h2 className="text-3xl text-indigo-500 font-bold">Lark Calenadr</h2>
      <nav className="flex items-center gap-10 text-lg font-semibold">
        <Link href="/calendar">Calendar</Link>
        <Link href="/community">Comminity</Link>
        {status === "authenticated" ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </nav>
    </header>
  );
}
