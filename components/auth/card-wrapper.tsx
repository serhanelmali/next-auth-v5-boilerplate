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
    <Card className="flex flex-col items-center">
      <CardHeader>
        <h1 className="text-3xl font-semibold">{headerLabel}</h1>
      </CardHeader>
      <CardContent>
        <span className="text-sm text-muted-foreground">{children}</span>
      </CardContent>
      {displaySocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label="Want to create an account?" href="/auth/register" />
      </CardFooter>
    </Card>
  );
};
