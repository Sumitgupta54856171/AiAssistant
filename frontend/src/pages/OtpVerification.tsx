import { useState, useRef, useEffect, useCallback } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sparkles, Moon, Sun, ShieldCheck, CheckCircle, ArrowLeft } from "lucide-react"

export default function OtpVerification() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme")
      if (saved === "dark") return true
      if (saved === "light") return false
    }
    return false
  })
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const toggleTheme = () => {
    const next = !darkMode
    setDarkMode(next)
    localStorage.setItem("theme", next ? "dark" : "light")
    document.documentElement.classList.toggle("dark", next)
  }

  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true)
      return
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  const handleResend = useCallback(() => {
    if (!canResend) return
    setTimer(30)
    setCanResend(false)
  }, [canResend])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(0, 1)
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const data = e.clipboardData.getData("text").slice(0, 6)
    const digits = data.split("")
    const newOtp = [...otp]
    digits.forEach((char, i) => {
      if (i < 6 && /^\d$/.test(char)) {
        newOtp[i] = char
      }
    })
    setOtp(newOtp)
    const focusIndex = Math.min(digits.length, 5)
    inputRefs.current[focusIndex]?.focus()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 auth-gradient-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle w-3 h-3 rounded-full bg-blue-500/40 animate-pulse" style={{ top: "20%", left: "20%", position: "absolute" }} />
        <div className="particle w-4 h-4 rounded-full bg-purple-500/40 animate-pulse" style={{ top: "60%", left: "70%", position: "absolute", animationDelay: "1s" }} />
        <div className="particle w-2 h-2 rounded-full bg-blue-400/40 animate-pulse" style={{ top: "40%", left: "50%", position: "absolute", animationDelay: "0.5s" }} />
      </div>

      <div className="w-full max-w-md relative">
        <Link to="/" className="flex items-center gap-2 mb-8 justify-center">
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
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center shadow-lg mb-4">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Verify your email</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We've sent a 6-digit code to
              <br />
              <span className="font-semibold text-gray-900 dark:text-gray-100">you@business.com</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-2 sm:gap-3">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => {
                    inputRefs.current[idx] = el
                  }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  onPaste={idx === 0 ? handlePaste : undefined}
                  className="otp-input w-14 h-16 text-center text-2xl font-bold rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:outline-none transition-all duration-200"
                  autoFocus={idx === 0}
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              ))}
            </div>

            <Button
              type="submit"
              className="btn-primary w-full py-6 rounded-xl text-white font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              Verify & Continue
              <CheckCircle className="w-4 h-4" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Didn't receive the code?</p>
            <button
              onClick={handleResend}
              disabled={!canResend}
              className="text-sm text-blue-600 hover:text-blue-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {canResend ? "Resend code" : `Resend code in ${timer}s`}
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
