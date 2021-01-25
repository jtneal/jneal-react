import photo from '../assets/images/these-are-not-the-droids-you-are-looking-for.jpg';
import './NotFound.scss';

function NotFound() {
  return (
    <section className="not-found">
      <h1>Not Found</h1>
      <div className="card">
        <img alt="These are not" src={photo} />
      </div>
    </section>
  );
}

export default NotFound;
