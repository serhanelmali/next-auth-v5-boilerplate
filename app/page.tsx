import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-black h-full">
      <div className="flex items-center flex-col space-y-6 text-white">
        <h1 className="text-6xl">Authentication</h1>
        <p>Simple Authentication Demo</p>
        <LoginButton>
          <Button variant="secondary">Sign In</Button>
        </LoginButton>
      </div>
    </main>
  );
}
