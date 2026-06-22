import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";

import { loginSchema } from "./schemas/loginSchema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

type LoginFormProps = {
  onSwitch: () => void;
};

function LoginForm({ onSwitch }: LoginFormProps) {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert(`Welcome back, ${data.username}!`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Welcome back
        </h2>

        <p className="text-sm text-slate-500 mt-1.5">
          Please enter your credentials to safely sign into your workspace.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FieldGroup className="space-y-4">
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Username
                </FieldLabel>

                <Input
                  {...field}
                  id="login-username"
                  type="text"
                  placeholder="vkurumella"
                  autoComplete="off"
                  className="h-11 border-slate-200 focus-visible:ring-blue-600 bg-slate-50/30 focus:bg-white transition-all rounded-lg"
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
                <div className="flex items-center justify-between">
                  <FieldLabel className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Password
                  </FieldLabel>

                  <a
                    href="#forgot"
                    className="text-xs font-medium text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <Input
                  {...field}
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  className="h-11 border-slate-200 focus-visible:ring-blue-600 bg-slate-50/30 focus:bg-white transition-all rounded-lg"
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
          disabled={form.formState.isSubmitting}
          className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg shadow-sm group transition-all mt-2"
        >
          {form.formState.isSubmitting ? (
            "Verifying credentials..."
          ) : (
            <span className="flex items-center justify-center gap-1.5">
              Sign In
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          )}
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-100" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-slate-400 font-medium tracking-wider">
            New to our platform?
          </span>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-blue-600 font-medium hover:underline"
        >
          Create Account
        </button>
      </p>
    </>
  );
}

export default LoginForm;