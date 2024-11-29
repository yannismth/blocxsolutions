import Benefits from '@/components/Benefits';
import Configurations from '@/components/Configurations';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Transition from '@/components/Transition'
import Head from 'next/head';
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';
import { Contact } from '@/components/Contact';
export default function Home() {
  return(
    <>
    <Head>
      <title>Blocx - Solution Modulaire</title>
      <meta name="description" content="Blocx est une solution modulaire innovante pour vos installations électriques et informatiques." />
    </Head>
    <Header />
    <main>
      <Hero />
      <Transition />
      <Benefits />
      <Configurations />
      <FAQ />
      <Contact />
      <Footer />
    </main>

    </>
  )
};