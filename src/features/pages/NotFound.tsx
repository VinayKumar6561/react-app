import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="rounded-full bg-red-100 p-5">
        <AlertTriangle className="h-12 w-12 text-red-600" />
      </div>

      <h1 className="mt-6 text-6xl font-extrabold text-slate-900">
        404
      </h1>

      <h2 className="mt-2 text-2xl font-semibold text-slate-800">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>
    </div>
  );
}