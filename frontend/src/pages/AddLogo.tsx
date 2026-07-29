import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Moon,
  Sun,
  Upload,
  Image,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  X,
  Building2,
} from "lucide-react"

export default function AddLogo() {
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme")
      if (saved === "dark") return true
      if (saved === "light") return false
    }
    return false
  })
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const toggleTheme = () => {
    const next = !darkMode
    setDarkMode(next)
    localStorage.setItem("theme", next ? "dark" : "light")
    document.documentElement.classList.toggle("dark", next)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setLogoPreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setLogoPreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemove = () => {
    setLogoPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleContinue = () => {
    navigate("/dashboard")
  }

  const handleSkip = () => {
    navigate("/dashboard")
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
              Step 3 of 3
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 dark:bg-gray-800 h-1">
        <div className="gradient-bg h-1 transition-all duration-500" style={{ width: "100%" }} />
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-lg mx-auto w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
              <Building2 className="w-3 h-3" /> BUSINESS SETUP
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Add your <span className="gradient-text">business logo</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Upload your business logo to personalize your dashboard and customer-facing communications.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 shadow-2xl">
            {/* Upload Area */}
            {!logoPreview ? (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
                  isDragging
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-300 dark:border-gray-700 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Upload your logo</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Drag and drop or click to browse
                </p>
                <p className="text-xs text-gray-400">
                  Supports PNG, JPG, SVG • Max 5MB
                </p>
              </div>
            ) : (
              /* Preview Area */
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-40 h-40 mx-auto rounded-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center bg-white dark:bg-gray-800 shadow-lg">
                    <img
                      src={logoPreview}
                      alt="Business logo preview"
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                  <button
                    onClick={handleRemove}
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">Logo uploaded successfully</p>
              </div>
            )}

            {/* Sample logos */}
            <div className="mt-8">
              <p className="text-xs text-gray-500 text-center mb-4">Or choose a sample logo to get started</p>
              <div className="flex justify-center gap-4">
                {[
                  { name: "Tech", color: "bg-blue-500" },
                  { name: "Health", color: "bg-green-500" },
                  { name: "Food", color: "bg-orange-500" },
                  { name: "Shop", color: "bg-pink-500" },
                ].map((sample) => (
                  <button
                    key={sample.name}
                    onClick={() => {
                      const canvas = document.createElement("canvas")
                      canvas.width = 200
                      canvas.height = 200
                      const ctx = canvas.getContext("2d")!
                      const colors: Record<string, string> = {
                        "bg-blue-500": "#3b82f6",
                        "bg-green-500": "#22c55e",
                        "bg-orange-500": "#f97316",
                        "bg-pink-500": "#ec4899",
                      }
                      ctx.fillStyle = colors[sample.color] || "#3b82f6"
                      ctx.fillRect(0, 0, 200, 200)
                      ctx.fillStyle = "white"
                      ctx.font = "bold 80px Inter, sans-serif"
                      ctx.textAlign = "center"
                      ctx.textBaseline = "middle"
                      ctx.fillText(sample.name[0], 100, 100)
                      setLogoPreview(canvas.toDataURL())
                    }}
                    className="group relative"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl ${sample.color} flex items-center justify-center text-white font-bold text-lg shadow-md hover:shadow-lg transition-all group-hover:-translate-y-1`}
                    >
                      {sample.name[0]}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{sample.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/business-description"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleSkip}
                  variant="outline"
                  className="px-6 py-6 rounded-xl font-medium"
                >
                  Skip for now
                </Button>
                <Button
                  onClick={handleContinue}
                  className="btn-primary px-8 py-6 rounded-xl text-white font-semibold shadow-lg flex items-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
