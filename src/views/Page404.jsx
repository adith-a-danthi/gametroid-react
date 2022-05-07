import { Link } from 'react-router-dom';
import { Navbar } from '../components';

export default function Page404() {
  return (
    <div>
      <Navbar />
      <main className="mt-8">
        <div className="text-center pa-8 ma-8">
          <h1 className="heading-1">404</h1>
          <h3 className="heading-3 mb-8">Oops! You seem to have accessed a broken link.</h3>
          <Link to="/">
            <button className="btn">
              <i className="fas fa-chevron-left mr-2"></i>
              Go Back
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
