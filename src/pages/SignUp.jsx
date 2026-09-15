import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import logo from "../assets/logo.png";

export default function SignUp() {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
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

    const name = form.name.trim();
    const email = form.email.trim();
    const password = form.password;

    if (name.length < 2) {
      setError("Name must be at least 2 characters");
      setLoading(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please provide a valid email address");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }
    if (password !== form.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await register(name, email, password);
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] w-full overflow-hidden bg-[#FAFAF8] font-sans text-[#0D0F11]">
      {success && <Navigate to="/" replace />}

      {/* Main — fills exactly 100vh, no page scroll */}
      <main className="flex h-full items-center justify-center px-5 py-6">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-zinc-100/80 bg-white p-6 shadow-sm">
            {/* Logo */}
            <div className="flex justify-center">
              <Link to="/" className="inline-flex shrink-0">
                <img
                  src={logo}
                  alt="MAC Logo"
                  className="h-9 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Badge */}
            <span className="mt-4 block text-center">
              <span className="inline-block rounded-md border border-lime-400 px-3 py-0.5 text-[11px] font-bold text-lime-600">
                GET STARTED
              </span>
            </span>

            <h1 className="mt-3 text-center text-xl font-bold tracking-tight">
              Create your account
            </h1>

            <p className="mt-1 text-center text-xs leading-relaxed text-zinc-500">
              Join MAC and start growing your digital presence today.
            </p>

            {/* Messages */}
            {error && (
              <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
                {error}
              </div>
            )}

            {/* Form */}
            {!success && (
              <form onSubmit={handleSubmit} className="mt-4 grid gap-2.5">
                {/* Full Name (full width) */}
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full rounded-xl border border-zinc-200 bg-[#FAFAF8] px-3 py-2 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
                  />
                </div>

                {/* Email (full width) */}
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full rounded-xl border border-zinc-200 bg-[#FAFAF8] px-3 py-2 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="relative">
                    <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      minLength={6}
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Password (min. 6 chars)"
                      className="w-full rounded-xl border border-zinc-200 bg-[#FAFAF8] pl-9 pr-10 py-2 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
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

                {/* Confirm Password */}
                <div>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      minLength={6}
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      className="w-full rounded-xl border border-zinc-200 bg-[#FAFAF8] pl-9 pr-4 py-2 text-sm text-[#0D0F11] placeholder-zinc-400 outline-none transition-colors focus:border-lime-400"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 w-full rounded-full bg-black px-8 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create Account"}
                </button>
              </form>
            )}

            <p className="mt-4 text-center text-xs text-zinc-500">
              Already have an account?{" "}
              <Link to="/signin" className="font-semibold text-black hover:text-zinc-700 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
