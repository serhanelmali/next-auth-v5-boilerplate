"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="flex w-full gap-x-2">
      <Button
        className="flex-1"
        size="lg"
        variant="outline"
        onClick={() => console.log("google login")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        className="flex-1"
        size="lg"
        variant="outline"
        onClick={() => console.log("github login")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
