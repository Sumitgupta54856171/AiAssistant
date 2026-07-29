import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sparkles,
  Moon,
  Sun,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Building,
  Check,
} from "lucide-react"

export default function Register() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme")
      if (saved === "dark") return true
      if (saved === "light") return false
    }
    return false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")

  const toggleTheme = () => {
    const next = !darkMode
    setDarkMode(next)
    localStorage.setItem("theme", next ? "dark" : "light")
    document.documentElement.classList.toggle("dark", next)
  }

  const getStrength = (val: string) => {
    let strength = 0
    if (val.length >= 8) strength++
    if (/[A-Z]/.test(val) && /[a-z]/.test(val)) strength++
    if (/\d/.test(val)) strength++
    if (/[^A-Za-z0-9]/.test(val)) strength++
    return strength
  }

  const strength = getStrength(password)
  const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"]
  const texts = ["Weak", "Fair", "Good", "Strong"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = "/business-selection"
  }

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 order-2 lg:order-1 auth-gradient-right">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">OmniAssist AI</span>
          </Link>

          <div className="flex justify-end mb-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="glass rounded-3xl p-8 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Create account</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Start your 14-day free trial. No credit card required.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 py-6 rounded-xl font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Sign up with Google
              </Button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-900 text-gray-500">or with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-2">First name</label>
                  <Input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full px-4 py-6 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last name</label>
                  <Input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full px-4 py-6 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Work email</label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="email"
                    required
                    placeholder="you@business.com"
                    className="w-full pl-10 pr-4 py-6 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company name</label>
                <div className="relative">
                  <Building className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    required
                    placeholder="Acme Inc."
                    className="w-full pl-10 pr-4 py-6 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-6 rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded transition-all duration-300 ${
                        i <= strength ? colors[strength - 1] : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {strength > 0
                    ? `${texts[strength - 1]} password`
                    : "Use 8+ characters with letters, numbers & symbols"}
                </p>
              </div>

              <label className="flex items-start gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-600 dark:text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <Button
                type="submit"
                className="btn-primary w-full py-6 rounded-xl text-white font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                Create Account
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden p-12 flex-col justify-between order-1 lg:order-2 auth-gradient-left">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particle w-3 h-3 rounded-full bg-blue-500/40 animate-pulse" style={{ top: "20%", left: "20%", position: "absolute" }} />
          <div className="particle w-4 h-4 rounded-full bg-purple-500/40 animate-pulse" style={{ top: "60%", left: "70%", position: "absolute", animationDelay: "1s" }} />
          <div className="particle w-2 h-2 rounded-full bg-blue-400/40 animate-pulse" style={{ top: "40%", left: "50%", position: "absolute", animationDelay: "0.5s" }} />
        </div>

        <Link to="/" className="relative flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">OmniAssist AI</span>
        </Link>

        <div className="relative">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Start automating <span className="gradient-text">today</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of businesses using OmniAssist AI to handle customer communication 24/7.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl glass">
              <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm font-medium">14-day free trial, no credit card</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl glass">
              <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm font-medium">Setup in under 5 minutes</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl glass">
              <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="relative text-sm text-gray-500">© 2025 OmniAssist AI. All rights reserved.</div>
      </div>
    </div>
  )
}
