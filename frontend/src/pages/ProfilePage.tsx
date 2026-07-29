import React from "react"
import UserProfile from "../components/UserProfile"

export default function ProfilePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <UserProfile />
    </div>
  )
}
