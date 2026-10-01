import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="font-heading font-black text-6xl text-slate-900 mb-4">404</h1>
      <h2 className="font-heading font-bold text-xl text-slate-800 mb-6">Page Not Found</h2>
      <p className="text-slate-600 text-sm max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-brand-teal text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg border-2 border-slate-900 shadow-solid-xs hover:bg-brand-tealDark transition-all"
      >
        Back to Home →
      </Link>
    </div>
  );
}
