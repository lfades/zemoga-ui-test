import Link from 'next/link';
import { StyledFooter, FooterLink } from './styles';
import { Twitter, Facebook } from './icons';

export default () => (
  <StyledFooter>
    <FooterLink>
      <Link href="/">
        <a>Terms and Conditions</a>
      </Link>
    </FooterLink>

    <FooterLink>
      <Link href="/">
        <a>Privacy Policy</a>
      </Link>
    </FooterLink>

    <FooterLink>
      <Link href="/">
        <a>Contact Us</a>
      </Link>
    </FooterLink>

    <FooterLink>
      <Link href="/">
        <a>Follow Us</a>
      </Link>
    </FooterLink>

    <FooterLink>
      <Facebook />
    </FooterLink>

    <FooterLink>
      <Twitter />
    </FooterLink>
  </StyledFooter>
);
