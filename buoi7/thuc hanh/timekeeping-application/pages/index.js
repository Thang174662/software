import Head from 'next/head'
import AddTimekeepingForm from '../components/AddTimekeepingForm'

export default function Home() {
  return (
    
    <div className="container">
      <Head>
        <title>Time Keeping Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AddTimekeepingForm />
      </main>
    </div>
  )
}