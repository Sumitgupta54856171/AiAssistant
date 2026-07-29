import React from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function UserProfile() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-card p-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center text-2xl font-bold">JD</div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold">John Doe</h2>
            <div className="text-sm text-muted-foreground">john@medicare.com</div>
            <div className="mt-2 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Pro Plan</span>
              <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs">Verified</span>
            </div>
          </div>
          <Button variant="default">Edit Profile</Button>
        </div>
      </div>

      <section className="rounded-2xl border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm block mb-1">First name</label>
            <Input defaultValue="John" />
          </div>
          <div>
            <label className="text-sm block mb-1">Last name</label>
            <Input defaultValue="Doe" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm block mb-1">Email</label>
            <Input type="email" defaultValue="john@medicare.com" />
          </div>
          <div className="sm:col-span-2 text-right">
            <Button variant="default">Save changes</Button>
          </div>
        </form>
      </section>

      <section className="rounded-2xl border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Security</h3>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
            <div>
              <div className="font-medium">Two-Factor Authentication</div>
              <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
            </div>
            <div className="w-11 h-6 rounded-full bg-gray-300" />
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
            <div>
              <div className="font-medium">Email Verified</div>
              <div className="text-sm text-muted-foreground">john@medicare.com</div>
            </div>
            <div className="px-3 py-1 rounded-full bg-success/10 text-success text-xs">Verified</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserProfile
