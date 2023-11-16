import HomePageTopHeader from '@/components/HomePageTopHeader'
import TrustedCompanies from '@/components/TrustedCompanies'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
     <HomePageTopHeader />
      <TrustedCompanies />
    </main>
  )
}
