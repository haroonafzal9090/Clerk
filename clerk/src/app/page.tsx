"use client"
import Image from 'next/image'
import { useAuth } from '@clerk/nextjs';


export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  if (!isLoaded || !userId) {
    return null;
  }else 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hello, {userId}</div>;
    </main>
  )
}
