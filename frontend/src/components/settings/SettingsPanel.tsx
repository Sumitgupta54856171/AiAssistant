import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Building2,
  CheckCircle2,
  Database,
  Eye,
  EyeOff,
  KeyRound,
  MessageCircle,
  Palette,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react"

type NavItem = {
  id: string
  label: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { id: "business", label: "Business Info", icon: Building2 },
  { id: "brand", label: "Brand & Logo", icon: Palette },
  { id: "database", label: "Database", icon: Database },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "voice", label: "Voice Settings", icon: Phone },
  { id: "ai", label: "AI Configuration", icon: Sparkles },
  { id: "users", label: "Users & Roles", icon: Users },
  { id: "api", label: "API Keys", icon: KeyRound },
]

const dbTypes = [
  { id: "mysql", label: "MySQL" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "mongodb", label: "MongoDB" },
  { id: "sqlite", label: "SQLite" },
  { id: "supabase", label: "Supabase" },
  { id: "firebase", label: "Firebase" },
  { id: "airtable", label: "Airtable" },
  { id: "googlesheets", label: "Google Sheets" },
]

export function SettingsPanel() {
  const [activeSection, setActiveSection] = useState("business")
  const [selectedDb, setSelectedDb] = useState("mysql")
  const [showPassword, setShowPassword] = useState(false)
  const [dbEnabled, setDbEnabled] = useState(true)
  const [whatsappEnabled, setWhatsappEnabled] = useState(true)

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Settings</h2>
          <p className="text-sm text-muted-foreground">
            Manage your workspace preferences and connected services.
          </p>
        </div>
        <div className="rounded-full border border-border bg-background/80 px-3 py-1 text-sm text-muted-foreground">
          Last saved 2 min ago
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="sticky top-4 rounded-2xl border border-border/70 bg-white/80 p-4 backdrop-blur-xl dark:bg-gray-900/80">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600/10 to-violet-600/10 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 hover:bg-muted dark:text-gray-300"
                    }`}
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        <div className="space-y-6 lg:col-span-3">
          <section id="business" className="rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:bg-gray-900/80">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                <Building2 className="size-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Business Information</h3>
                <p className="text-sm text-muted-foreground">Update your business details.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Business Name</label>
                <Input defaultValue="OmniAssist AI" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Owner / Contact</label>
                <Input defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input defaultValue="hello@omniassist.ai" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input defaultValue="+1 (555) 987-6543" />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium">Address</label>
              <textarea
                rows={2}
                defaultValue="123 Healthcare Ave, Medical District, New York, USA"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <div className="mt-6 flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </section>

          <section id="brand" className="rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:bg-gray-900/80">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30">
                <Palette className="size-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Brand & Logo</h3>
                <p className="text-sm text-muted-foreground">Customize your brand appearance.</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Logo</label>
                <div className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border p-6 text-center transition hover:border-blue-500">
                  <div className="mb-3 flex size-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                    <Sparkles className="size-7" />
                  </div>
                  <p className="text-sm font-medium">Upload your logo</p>
                  <p className="mt-1 text-sm text-muted-foreground">PNG, JPG, SVG up to 5MB</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Primary Color</label>
                  <Input defaultValue="#2563EB" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Accent Color</label>
                  <Input defaultValue="#7C3AED" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Brand Tagline</label>
                  <Input defaultValue="AI that feels human" />
                </div>
              </div>
            </div>
          </section>

          <section id="database" className="rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:bg-gray-900/80">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30">
                  <Database className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Database Connection</h3>
                  <p className="text-sm text-muted-foreground">Connect your business knowledge base.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-emerald-600">Connected</span>
                <button
                  onClick={() => setDbEnabled(!dbEnabled)}
                  className={`relative h-6 w-11 rounded-full transition ${dbEnabled ? "bg-blue-600" : "bg-gray-300"}`}
                >
                  <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${dbEnabled ? "left-6" : "left-1"}`} />
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-3 block text-sm font-medium">Choose Database Type</label>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {dbTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedDb(type.id)}
                    className={`rounded-xl border p-4 text-center text-sm font-medium transition ${
                      selectedDb === type.id
                        ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20"
                        : "border-border bg-background/60"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Host</label>
                <Input defaultValue="db.internal.omniassist.ai" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Port</label>
                <Input defaultValue="3306" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Username</label>
                <Input defaultValue="omniadmin" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Input type={showPassword ? "text" : "password"} defaultValue="••••••••" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4">
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-600" />
                <h4 className="font-medium">AI Permissions</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between rounded-lg bg-background/70 px-3 py-2">
                  <span>Read invoices and customer records</span>
                  <CheckCircle2 className="size-4 text-emerald-600" />
                </div>
                <div className="flex items-center justify-between rounded-lg bg-background/70 px-3 py-2">
                  <span>Write notes and task updates</span>
                  <CheckCircle2 className="size-4 text-emerald-600" />
                </div>
              </div>
            </div>
          </section>

          <section id="whatsapp" className="rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:bg-gray-900/80">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">WhatsApp Settings</h3>
                  <p className="text-sm text-muted-foreground">Bridge your communication channel.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Connected</span>
                <button
                  onClick={() => setWhatsappEnabled(!whatsappEnabled)}
                  className={`relative h-6 w-11 rounded-full transition ${whatsappEnabled ? "bg-blue-600" : "bg-gray-300"}`}
                >
                  <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${whatsappEnabled ? "left-6" : "left-1"}`} />
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">WhatsApp Business Number</label>
                <Input defaultValue="+1 (555) 987-6543" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Business Account ID</label>
                <Input defaultValue="BA-2847-MEDICARE" />
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {[
                ["Auto-reply on business hours", true],
                ["Share appointment links", false],
                ["Notify on new lead", true],
              ].map(([label, enabled]) => (
                <div key={String(label)} className="flex items-center justify-between rounded-xl border border-border bg-background/70 px-3 py-3 text-sm">
                  <span>{label}</span>
                  <div className={`h-6 w-11 rounded-full ${enabled ? "bg-blue-600" : "bg-gray-300"}`} />
                </div>
              ))}
            </div>
          </section>

          <section id="voice" className="rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:bg-gray-900/80">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30">
                <Phone className="size-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Voice Settings</h3>
                <p className="text-sm text-muted-foreground">Configure your AI voice agent.</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Voice Provider</label>
                <select className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none">
                  <option>ElevenLabs</option>
                  <option>Azure Speech</option>
                  <option>OpenAI TTS</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Voice</label>
                <select className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none">
                  <option>Rachel</option>
                  <option>Aria</option>
                  <option>Josh</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Language</label>
                <select className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input defaultValue="+1 (555) 100-2000" />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium">Speaking Speed: 1.0x</label>
              <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-full accent-blue-600" />
            </div>
          </section>

          <section id="ai" className="rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:bg-gray-900/80">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                <Sparkles className="size-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">AI Configuration</h3>
                <p className="text-sm text-muted-foreground">Customize your AI employee behavior.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">AI Model</label>
                <select className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none">
                  <option>GPT-4.1</option>
                  <option>GPT-4o</option>
                  <option>Claude 3.5</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">AI Personality</label>
                <select className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none">
                  <option>Professional and empathetic</option>
                  <option>Friendly and direct</option>
                  <option>Concise and formal</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Custom System Prompt</label>
                <textarea
                  rows={4}
                  defaultValue="You are a helpful AI assistant for OmniAssist AI. Always be professional, empathetic, and accurate."
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
                />
              </div>
            </div>
          </section>

          <section id="users" className="rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:bg-gray-900/80">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-pink-900/30">
                  <Users className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Users & Roles</h3>
                  <p className="text-sm text-muted-foreground">Manage access and responsibilities.</p>
                </div>
              </div>
              <Button className="gap-2">
                <UserPlus className="size-4" /> Invite User
              </Button>
            </div>

            <div className="space-y-3">
              {[
                { name: "John Doe", role: "Admin" },
                { name: "Sarah Chen", role: "Manager" },
                { name: "Mina Patel", role: "Analyst" },
              ].map((person) => (
                <div key={person.name} className="flex items-center justify-between rounded-xl border border-border bg-background/70 px-3 py-3">
                  <div>
                    <p className="font-medium">{person.name}</p>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-xs font-medium">Active</div>
                </div>
              ))}
            </div>
          </section>

          <section id="api" className="rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:bg-gray-900/80">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30">
                  <KeyRound className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">API Keys</h3>
                  <p className="text-sm text-muted-foreground">Keep your integrations secure.</p>
                </div>
              </div>
              <Button className="gap-2">
                <Plus className="size-4" /> New Key
              </Button>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">OpenAI API Key</p>
                    <p className="text-sm text-muted-foreground">sk-••••••••••••••••</p>
                  </div>
                  <Button variant="outline">Rotate</Button>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">WhatsApp Business API</p>
                    <p className="text-sm text-muted-foreground">wa-••••••••••••••••</p>
                  </div>
                  <Button variant="outline">Rotate</Button>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900/40 dark:bg-amber-900/20 dark:text-amber-200">
              Keep API keys private and rotate them regularly to protect integrations.
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
