import { Link } from 'react-router-dom';
import { Navbar, CategoriesSection } from '../../components';
import './Home.css';

export function Home() {
  return (
    <>
      <Navbar />
      <main className="pa-4 px-8">
        {/* Hero Section */}
        <section id="hero" className="hero hero-bg">
          <div className="hero-content pa-8">
            <h1 className="heading-1 text-white">Explore</h1>
            <p className="text-lg text-white">Explore latest deals and new releases</p>
            <div className="flex gap-1 py-4">
              <Link to="/products">
                <button className="btn btn-secondary font-weight-bold">Shop Now</button>
              </Link>
            </div>
          </div>
        </section>
        {/* Categories Section */}
        <section id="categories" className="py-8">
          <CategoriesSection />
        </section>
      </main>
    </>
  );
}
