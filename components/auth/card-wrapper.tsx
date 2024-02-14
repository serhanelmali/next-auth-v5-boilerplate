import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/ui/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  displaySocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  displaySocial,
}: CardWrapperProps) => {
  return (
    <Card className="flex flex-col items-center w-[400px]">
      <div className="w-full">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-semibold">Authentication</h1>
          <span className="text-sm text-muted-foreground">{headerLabel}</span>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {displaySocial && (
          <CardFooter className="w-full">
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </div>
    </Card>
  );
};
