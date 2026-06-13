'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PreLoader from '@/components/Common/PreLoader'

export default function SplashPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => router.push('/home'), 3000)
    return () => clearTimeout(timer)
  }, [router])

  return <PreLoader />
}
