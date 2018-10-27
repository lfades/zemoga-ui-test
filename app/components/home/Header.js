import Link from 'next/link';
import { StyledHeader } from './styles';
import { Search } from './icons';

export default () => (
  <StyledHeader>
    <nav>
      <div className="logo">
        <Link href="/">
          <a>Rule of Thumb.</a>
        </Link>
      </div>
      <Link href="/">
        <a>Past Trials</a>
      </Link>
      <Link href="/">
        <a>How it Works</a>
      </Link>
      <Link href="/">
        <a>Log In / Sign Up</a>
      </Link>
      <Link href="/">
        <a>
          <Search />
        </a>
      </Link>
    </nav>
  </StyledHeader>
);
