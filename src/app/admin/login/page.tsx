"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock } from "lucide-react"

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0F0F23] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            Nova<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#7B2FBE]">Hub</span> Admin
          </h1>
          <p className="text-slate-500 dark:text-slate-400">Enter your credentials to access the dashboard</p>
        </div>

        <div className="bg-white dark:bg-[#1E1E4A] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="admin@novahub.in" 
                className="h-12 bg-slate-50 dark:bg-slate-900/50"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="h-12 bg-slate-50 dark:bg-slate-900/50"
              />
            </div>

            <Button className="w-full h-12 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-bold">
              Sign In
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center text-sm text-slate-500">
            <Lock className="w-4 h-4 mr-2" />
            Secured by Supabase Auth
          </div>
        </div>
      </div>
    </div>
  )
}
