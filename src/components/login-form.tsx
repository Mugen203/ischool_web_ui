"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/validation/auth";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface LoginFormProps
  extends Omit<React.ComponentPropsWithoutRef<"form">, "onSubmit"> {
  onSubmit: (data: LoginInput) => Promise<void>;
}

/**
 * A form component for logging into an account.
 *
 * @example
 **/
export function LoginForm({ className, onSubmit, ...props }: LoginFormProps) {
  const [role, setRole] = useState<"student" | "staff">("student");

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: "student",
      id: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your ID below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <RadioGroup
          defaultValue="student"
          onValueChange={(value) => setRole(value as "student" | "staff")}
          className="flex justify-center gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="student" id="student" />
            <Label htmlFor="student">Student</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="staff" id="staff" />
            <Label htmlFor="staff">Staff</Label>
          </div>
        </RadioGroup>
        <div className="grid gap-2">
          <Label htmlFor="id">
            {role === "student" ? "Student" : "Staff"} ID
          </Label>
          <Input
            {...form.register("id")}
            id="id"
            type="text"
            placeholder="Enter your ID"
          />
          {form.formState.errors.id && (
            <p className="text-sm text-red-500">
              {form.formState.errors.id.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Contact administration
        </a>
      </div>
    </form>
  );
}
