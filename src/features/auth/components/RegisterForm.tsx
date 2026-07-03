import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormData } from "../schemas/registerSchema";
import { register } from "../services/authService";

type RegisterFormProps = {
  onSwitch: () => void;
};

export default function RegisterForm({ onSwitch }: RegisterFormProps) {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  // Destructure errors for cleaner markup reference
  const { errors } = form.formState;

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await register(data);
      console.log("Registration response:", response.data);
      if (response.status === 201) {
        alert("Registration successful! Please log in.");
        onSwitch(); // Switch to the login form after successful registration
      }
    } catch (error) {
      console.error("Error occurred while registering:", error);
    }
  };

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Create Account</h2>
        <p className="text-sm text-slate-500 mt-1.5">
          Create your SecurePortal account.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FieldGroup className="space-y-4">
          {/* Full Name */}
          <Field data-invalid={!!errors.name}>
            <FieldLabel>Full Name</FieldLabel>
            <Input
              {...form.register("name")}
              placeholder="Vinay Kurumella"
              className="h-11 rounded-lg"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <FieldError errors={[errors.name]} />
            )}
          </Field>

          {/* Email */}
          <Field data-invalid={!!errors.email}>
            <FieldLabel>Email</FieldLabel>
            <Input
              {...form.register("email")}
              type="email"
              placeholder="you@example.com"
              className="h-11 rounded-lg"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <FieldError errors={[errors.email]} />
            )}
          </Field>

          {/* Username */}
          <Field data-invalid={!!errors.username}>
            <FieldLabel>Username</FieldLabel>
            <Input
              {...form.register("username")}
              placeholder="vkurumella"
              className="h-11 rounded-lg"
              aria-invalid={!!errors.username}
            />
            {errors.username && (
              <FieldError errors={[errors.username]} />
            )}
          </Field>

          {/* Password */}
          <Field data-invalid={!!errors.password}>
            <FieldLabel>Password</FieldLabel>
            <Input
              {...form.register("password")}
              type="password"
              placeholder="••••••••"
              className="h-11 rounded-lg"
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <FieldError errors={[errors.password]} />
            )}
          </Field>
        </FieldGroup>

        <Button
          type="submit"
          className="w-full h-11 bg-slate-900 text-white rounded-lg"
        >
          <span className="flex items-center gap-2">
            Create Account
            <ArrowRight size={16} />
          </span>
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-100" />
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-blue-600 font-medium hover:underline"
        >
          Sign In
        </button>
      </p>
    </>
  );
}