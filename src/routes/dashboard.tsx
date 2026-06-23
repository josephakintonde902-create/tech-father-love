import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Lovable App" },
      { name: "description", content: "Your dashboard page for Lovable App." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          This imaginary dashboard route is here so direct visits and refreshes to <code className="rounded bg-slate-100 px-1 py-0.5">/dashboard</code>
          resolve correctly in the SPA.
        </p>
      </div>
    </main>
  );
}
