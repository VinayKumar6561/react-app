import React from "react";
export default function Dashboard() {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <p className="text-slate-500">
          Here is what is happening with your workspace today.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-xs uppercase text-slate-400">
            Total Active Users
          </p>
          <h1 className="mt-2 text-3xl font-bold">1,248</h1>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-xs uppercase text-slate-400">
            Success Rate
          </p>
          <h1 className="mt-2 text-3xl font-bold text-green-600">
            99.94%
          </h1>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-xs uppercase text-slate-400">
            API Load
          </p>
          <h1 className="mt-2 text-3xl font-bold">24ms</h1>
        </div>
      </div>
    </>
  );
}