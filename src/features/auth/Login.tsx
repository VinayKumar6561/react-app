"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schemas/loginSchema";
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

function Login() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: { username: "", password: "" },
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
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white font-sans selection:bg-blue-500/10">
      
      {/* LEFT SIDE: VISUAL BRANDING PANEL (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:col-span-5 relative bg-slate-900 overflow-hidden flex-col justify-between p-12 text-white">
        {/* Subtle background ambient light effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

        {/* Brand Header */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/30">
            <ShieldCheck size={22} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            SecurePortal
          </span>
        </div>

        {/* Dynamic Marketing Statement */}
        <div className="relative z-10 my-auto max-w-sm space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-blue-400 backdrop-blur-sm">
            <Sparkles size={12} /> Version 4.0 Launch
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
            Simplify your digital identity.
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Access your secure dashboard, monitor real-time analytics integrations, and deploy globally with confidence.
          </p>
        </div>

        {/* Dynamic Sticky Footer */}
        <div className="relative z-10 text-xs text-slate-500 font-medium">
          &copy; 2026 SecurePortal Inc. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE: CLEAN FORM INTERACTION PANEL */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center px-4 sm:px-16 lg:px-24 xl:px-32 bg-slate-50/40">
        
        {/* Mobile-only logo */}
        <div className="lg:hidden flex items-center gap-2 mb-8 self-start">
          <div className="p-2 rounded-lg bg-blue-600 text-white">
            <ShieldCheck size={18} />
          </div>
          <span className="font-bold text-base text-slate-900">SecurePortal</span>
        </div>

        {/* Form Core Anchor */}
        <div className="w-full max-w-md mx-auto bg-white border border-slate-200/60 p-8 sm:p-10 rounded-2xl shadow-xl shadow-slate-100/50">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h2>
            <p className="text-sm text-slate-500 mt-1.5">
              Please enter your credentials to safely sign into your workspace.
            </p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FieldGroup className="space-y-4">
              
              {/* USERNAME */}
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Username</FieldLabel>
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

              {/* PASSWORD */}
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex items-center justify-between">
                      <FieldLabel className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Password</FieldLabel>
                      <a href="#forgot" className="text-xs font-medium text-blue-600 hover:underline">
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
                  Sign In <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          {/* Social Alternative */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-medium tracking-wider">New to our platform?</span></div>
          </div>

          <p className="text-center text-sm text-slate-500">
            Contact your workspace administrator to{" "}
            <a href="#request" className="text-blue-600 font-medium hover:underline">
              request an invite
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;