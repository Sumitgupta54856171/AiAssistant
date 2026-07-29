import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sparkles,
  Moon,
  Sun,
  Check,
  ArrowLeft,
  ArrowRight,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Bed,
  Utensils,
  ShoppingBag,
  BookOpen,
  Stethoscope,
  Home,
  Car,
  CheckCircle2,
} from "lucide-react"

const businesses = [
  { id: "hospital", label: "Hospital", desc: "Patient inquiries, appointments", icon: HeartPulse, color: "bg-red-100 dark:bg-red-900/30", iconColor: "text-red-600" },
  { id: "school", label: "School", desc: "Admissions, parent queries", icon: GraduationCap, color: "bg-blue-100 dark:bg-blue-900/30", iconColor: "text-blue-600" },
  { id: "store", label: "Grocery Store", desc: "Orders, deliveries", icon: ShoppingCart, color: "bg-green-100 dark:bg-green-900/30", iconColor: "text-green-600" },
  { id: "hotel", label: "Hotel", desc: "Bookings, guest services", icon: Bed, color: "bg-purple-100 dark:bg-purple-900/30", iconColor: "text-purple-600" },
  { id: "restaurant", label: "Restaurant", desc: "Reservations, menu", icon: Utensils, color: "bg-orange-100 dark:bg-orange-900/30", iconColor: "text-orange-600" },
  { id: "retail", label: "Retail Shop", desc: "Sales, inventory", icon: ShoppingBag, color: "bg-pink-100 dark:bg-pink-900/30", iconColor: "text-pink-600" },
  { id: "coaching", label: "Coaching", desc: "Courses, enrollments", icon: BookOpen, color: "bg-indigo-100 dark:bg-indigo-900/30", iconColor: "text-indigo-600" },
  { id: "clinic", label: "Clinic", desc: "Appointments, prescriptions", icon: Stethoscope, color: "bg-teal-100 dark:bg-teal-900/30", iconColor: "text-teal-600" },
  { id: "realestate", label: "Real Estate", desc: "Listings, viewings", icon: Home, color: "bg-yellow-100 dark:bg-yellow-900/30", iconColor: "text-yellow-600" },
  { id: "automobile", label: "Automobile", desc: "Showroom, test drives", icon: Car, color: "bg-cyan-100 dark:bg-cyan-900/30", iconColor: "text-cyan-600" },
  { id: "custom", label: "Custom", desc: "Any other business", icon: Sparkles, color: "bg-gray-100 dark:bg-gray-800", iconColor: "text-gray-600" },
]

export default function BusinessSelection() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme")
      if (saved === "dark") return true
      if (saved === "light") return false
    }
    return false
  })
  const [selected, setSelected] = useState<string | null>(null)
  const [customValue, setCustomValue] = useState("")

  const toggleTheme = () => {
    const next = !darkMode
    setDarkMode(next)
    localStorage.setItem("theme", next ? "dark" : "light")
    document.documentElement.classList.toggle("dark", next)
  }

  const handleContinue = () => {
    if (selected) {
      navigate("/business-description")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Top Bar */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">OmniAssist AI</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Step 2 of 3
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 dark:bg-gray-800 h-1">
        <div className="gradient-bg h-1 transition-all duration-500" style={{ width: "66%" }} />
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
              <Building2 className="w-3 h-3" /> BUSINESS SETUP
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              What type of <span className="gradient-text">business</span> do you run?
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose your business type so we can customize your AI Employee with the right templates, workflows, and integrations.
            </p>
          </div>

          {/* Business Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {businesses.map((biz) => {
              const Icon = biz.icon
              const isSelected = selected === biz.id
              return (
                <div
                  key={biz.id}
                  onClick={() => setSelected(biz.id)}
                  className={`business-card glass rounded-2xl p-6 border-2 relative cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                    isSelected
                      ? "border-blue-500 shadow-[0_0_0_3px_rgba(37,99,235,0.2)]"
                      : "border-gray-200 dark:border-gray-800"
                  }`}
                >
                  <div
                    className={`check-icon absolute top-3 right-3 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center transition-all duration-300 ${
                      isSelected ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${biz.color} flex items-center justify-center mb-3`}>
                    <Icon className={`w-6 h-6 ${biz.iconColor}`} />
                  </div>
                  <h3 className="font-bold mb-1">{biz.label}</h3>
                  <p className="text-xs text-gray-500">{biz.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Custom Business Input */}
          {selected === "custom" && (
            <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-8">
              <label className="block text-sm font-medium mb-2">Tell us about your business</label>
              <Input
                type="text"
                placeholder="e.g., Law firm, Travel agency, Gym..."
                value={customValue}
                onChange={(e) => setCustomValue(e.target.value)}
                className="w-full px-4 py-6 rounded-xl"
              />
            </div>
          )}

          {/* Continue Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/register"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <Button
              onClick={handleContinue}
              disabled={!selected}
              className="btn-primary px-8 py-6 rounded-xl text-white font-semibold shadow-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
