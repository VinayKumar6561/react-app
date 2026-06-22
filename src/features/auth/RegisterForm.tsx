import { useForm, Controller } from "react-hook-form";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./schemas/registerSchema";

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

  const onSubmit = async (data: any) => {
    console.log(data);
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
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Full Name</FieldLabel>

                <Input
                  {...field}
                  placeholder="Vinay Kurumella"
                  className="h-11 rounded-lg"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Email</FieldLabel>

                <Input
                  {...field}
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 rounded-lg"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Username</FieldLabel>

                <Input
                  {...field}
                  placeholder="vkurumella"
                  className="h-11 rounded-lg"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Password</FieldLabel>

                <Input
                  {...field}
                  type="password"
                  placeholder="••••••••"
                  className="h-11 rounded-lg"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
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
