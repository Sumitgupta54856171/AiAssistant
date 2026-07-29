import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, KeyRound, ShieldCheck, Smartphone } from "lucide-react"

export function SettingsPanel() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage your account preferences and security options.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your personal details and public presence.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full name</label>
              <Input placeholder="Alex Morgan" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input placeholder="alex@example.com" />
            </div>
          </div>
          <Button>Save changes</Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="size-4" /> Notifications
            </CardTitle>
            <CardDescription>Choose what alerts you receive.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded-lg border p-3">Email summaries every 24 hours</div>
            <div className="rounded-lg border p-3">Desktop push notifications</div>
            <div className="rounded-lg border p-3">Weekly digest</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="size-4" /> Security
            </CardTitle>
            <CardDescription>Protect your account and recover access quickly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 rounded-lg border p-3">
              <KeyRound className="size-4" /> Two-factor authentication
            </div>
            <div className="flex items-center gap-2 rounded-lg border p-3">
              <Smartphone className="size-4" /> Recovery phone added
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
