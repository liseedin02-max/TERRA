/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Collection from './components/Collection.tsx';
import Philosophy from './components/Philosophy.tsx';
import SpecialOfferings from './components/SpecialOfferings.tsx';
import Gallery from './components/Gallery.tsx';
import Newsletter from './components/Newsletter.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-terra-primary/10">
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <Philosophy />
        <SpecialOfferings />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

