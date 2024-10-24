import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FaGoogle } from "react-icons/fa";
export default function GoogleLoginButton() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    router.push("/dashboard");
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn("google")}
        className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md mb-4 gap-2"
      >
        <FaGoogle />
        Sign in
      </button>
    </>
  );
}
