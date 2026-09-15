import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import logo from "../assets/logo.png";

export default function SignIn() {
  const { login } = useAuth();
  const [form, setForm] = useState(() => {
    const stored = localStorage.getItem("mac_user");
    const email = stored ? JSON.parse(stored).email || "" : "";
    return { email: email, password: "" };
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = form.email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please provide a valid email address");
      setLoading(false);
      return;
    }
    if (!form.password) {
      setError("Password is required");
      setLoading(false);
      return;
    }

    try {
      await login(email, form.password);
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#FAFAF8] font-sans text-[#0D0F11]">
      {success && <Navigate to="/" replace />}

      {/* Main — fills entire viewport height, logo + card centered */}
      <main className="flex h-full items-center justify-center overflow-hidden px-5">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-zinc-100/80 bg-white p-8 shadow-sm">
            {/* Logo */}
            <div className="flex justify-center">
              <Link to="/" className="inline-flex shrink-0">
                <img
                  src={logo}
                  alt="MAC Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Badge */}
            <span className="mt-6 block text-center">
              <span className="inline-block rounded-md border border-lime-400 px-3 py-1 text-xs font-bold text-lime-600">
                WELCOME BACK
              </span>
            </span>

            <h1 className="mt-4 text-center text-2xl font-bold tracking-tight">
              Sign in to your account
            </h1>

            <p className="mt-2 text-center text-sm leading-relaxed text-zinc-500">
              Enter your credentials to continue.
            </p>

            {/* Messages */}
            {success && (
              <div className="mt-4 rounded-xl border border-lime-400/40 bg-lime-400/10 px-4 py-3 text-sm text-lime-700">
                <p className="font-semibold">Login successful! Redirecting...</p>
              </div>
            )}

            {error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Form */}
            {!success && (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-[#0D0F11]">
                    Email Address
                  </label>
                  <div className="relative mt-1.5">
                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-zinc-200 bg-[#FAFAF8] pl-9 pr-4 py-2.5 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="text-xs font-semibold text-[#0D0F11]">
                    Password
                  </label>
                  <div className="relative mt-1.5">
                    <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-zinc-200 bg-[#FAFAF8] pl-9 pr-10 py-2.5 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 w-full rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </form>
            )}

            <p className="mt-5 text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold text-black hover:text-zinc-700 transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
