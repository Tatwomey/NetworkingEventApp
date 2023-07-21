import Link from 'next/link';
import Button from '../ui/button';
import classes from './results-title.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const isValidDate = !isNaN(new Date(date));

  const humanReadableDate = isValidDate
    ? new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      })
    : '';

  return (
    <section className={classes.title}>
      {isValidDate && <h1>Events in {humanReadableDate}</h1>}
      <Link href="/events" legacyBehavior> 
        <a>
          <Button>Show all events</Button>
        </a>
      </Link>
    </section>
  );
}

export default ResultsTitle;
