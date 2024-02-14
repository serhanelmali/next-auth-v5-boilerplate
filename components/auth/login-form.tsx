"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { LoginSchema } from "@/schemas";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => console.log(values);

  return (
    <CardWrapper
      headerLabel="Welcome back again!"
      backButtonLabel="Want to create an account?"
      backButtonHref="/auth/register"
      displaySocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => onSubmit(values))}
          className="space-y-5"
        >
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
