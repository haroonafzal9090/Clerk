import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page({ SearchParams }: any) {
  const redirectUrl = SearchParams?.redirectUrl || "/";
  return <SignIn redirectUrl={redirectUrl} />;
}
