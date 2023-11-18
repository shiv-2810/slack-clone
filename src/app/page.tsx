import Footer from '@/components/Footer'
import HomePageTopHeader from '@/components/HomePageTopHeader'
import NewWayToWork from '@/components/NewWayToWork'
import TeamsSlack from '@/components/TeamsSlack'
import TrustedCompanies from '@/components/TrustedCompanies'

export default function Home() {
  return (
    <main className="flex  flex-col items-center">
      <HomePageTopHeader />
      <TrustedCompanies />
      <TeamsSlack />̨
      <NewWayToWork />
      <Footer />
    </main>
  )
}
