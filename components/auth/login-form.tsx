import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back again!"
      backButtonLabel="Want to create an account?"
      backButtonHref="/auth/register"
      displaySocial
    >
      <div>Login Form</div>
    </CardWrapper>
  );
};
