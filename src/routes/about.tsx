import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lovable App" },
      { name: "description", content: "Learn more about Lovable App and our services." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Lovable App is a Vite + React application built with TanStack Router. This page exists so
          deep links and refreshes like <code className="rounded bg-slate-100 px-1 py-0.5">/about</code>
          work correctly on Vercel.
        </p>
      </div>
    </main>
  );
}
