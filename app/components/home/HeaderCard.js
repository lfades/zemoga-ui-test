import {
  StyledHeaderCard,
  HeaderCardContent,
  HeaderCardThumbs
} from './styles';
import { H1, H5, H6 } from '../globals';
import { ThumpUp, ThumpDown } from './icons';

export default () => (
  <StyledHeaderCard>
    <HeaderCardContent>
      <H6>What's your opinion on</H6>
      <H1>Pope Francis?</H1>
      <p>
        He's talking tough on clergy sexual abuse, but is he just another papal
        pervert protector? (thumbs down) or a true pedophile punishing pontiff?
        (thumbs up)
      </p>
      <div className="small">
        <img src="/static/wiki.png" alt="More info in Wikipedia" />
        <a href="/">More information</a>
      </div>
      <H5>What's Your Verdict ?</H5>
    </HeaderCardContent>

    <HeaderCardThumbs>
      <div className="up">
        <ThumpUp />
      </div>
      <div className="down">
        <ThumpDown />
      </div>
    </HeaderCardThumbs>
  </StyledHeaderCard>
);
