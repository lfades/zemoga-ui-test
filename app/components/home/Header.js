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
      <Link href="/nowhere">
        <a>Past Trials</a>
      </Link>
      <Link href="/nowhere">
        <a>How it Works</a>
      </Link>
      <Link href="/nowhere">
        <a>Log In / Sign Up</a>
      </Link>
      <Link href="/nowhere">
        <a>
          <Search />
        </a>
      </Link>
    </nav>
  </StyledHeader>
);
