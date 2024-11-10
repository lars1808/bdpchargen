"use client"

import * as React from "react"

export function Alert({ children, className = "", variant = "default" }: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive";
}) {
  const baseStyles = "relative w-full rounded-lg border p-4"
  const variantStyles = variant === "destructive" 
    ? "border-red-500 text-red-500" 
    : "bg-white border-gray-200"
  
  return (
    <div role="alert" className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </div>
  )
}

export function AlertDescription({ children, className = "" }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-sm ${className}`}>
      {children}
    </div>
  )
}