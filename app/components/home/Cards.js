import {
  StyledCards,
  Card,
  CardBody,
  CardContent,
  CardVotes,
  VoteUp,
  VoteDown
} from './styles';
import { ThumpUp, ThumpDown } from './icons';
import { H2 } from '../globals';

export default () => (
  <StyledCards>
    <Card>
      <img src="/static/kanye.png" alt="Kanye West" />

      <CardBody>
        <CardContent>
          <div className="thumb">
            <div className="thumb-up">
              <ThumpUp width="18px" height="18px" />
            </div>
          </div>

          <H2>Kanye West</H2>
          <p className="small">
            <span>1 month ago</span> in Entertainment
          </p>
          <p className="description">
            Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
            eu velit libero.
          </p>

          <div className="actions">
            <div className="thumb-up active">
              <ThumpUp width="18px" height="18px" />
            </div>
            <div className="thumb-down">
              <ThumpDown width="18px" height="18px" />
            </div>
            <button type="button">Vote now</button>
          </div>
        </CardContent>

        <CardVotes widthUp={64} widthDown={36}>
          <VoteUp>
            <ThumpUp width="28px" height="28px" />
            <span>64%</span>
          </VoteUp>
          <VoteDown>
            <span>36%</span>
            <ThumpDown width="28px" height="28px" />
          </VoteDown>
        </CardVotes>
      </CardBody>
    </Card>

    <Card>
      <img src="/static/mark.png" alt="Mark Zuckerberg" />

      <CardBody>
        <CardContent>
          <div className="thumb">
            <div className="thumb-up">
              <ThumpUp width="18px" height="18px" />
            </div>
          </div>

          <H2>Mark Zuckerberg</H2>
          <p className="small">
            <span>1 month ago</span> in Business
          </p>
          <p className="description">Thank you for voting!</p>

          <div className="actions">
            <button type="button">Vote again</button>
          </div>
        </CardContent>

        <CardVotes widthUp={36} widthDown={64}>
          <VoteUp>
            <ThumpUp width="28px" height="28px" />
            <span>64%</span>
          </VoteUp>
          <VoteDown>
            <span>36%</span>
            <ThumpDown width="28px" height="28px" />
          </VoteDown>
        </CardVotes>
      </CardBody>
    </Card>

    <Card>
      <img src="/static/cristina.png" alt="Cristina Fernández de kirchner" />

      <CardBody>
        <CardContent>
          <div className="thumb">
            <div className="thumb-up">
              <ThumpUp width="18px" height="18px" />
            </div>
          </div>

          <H2>Cristina Fernández de kirchner</H2>
          <p className="small">
            <span>1 month ago</span> in Politics
          </p>
          <p className="description">
            Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
            eu velit libero.
          </p>

          <div className="actions">
            <div className="thumb-up active">
              <ThumpUp width="18px" height="18px" />
            </div>
            <div className="thumb-down">
              <ThumpDown width="18px" height="18px" />
            </div>
            <button type="button">Vote now</button>
          </div>
        </CardContent>

        <CardVotes widthUp={36} widthDown={64}>
          <VoteUp>
            <ThumpUp width="28px" height="28px" />
            <span>64%</span>
          </VoteUp>
          <VoteDown>
            <span>36%</span>
            <ThumpDown width="28px" height="28px" />
          </VoteDown>
        </CardVotes>
      </CardBody>
    </Card>

    <Card>
      <img src="/static/malala.png" alt="Malala Yousafzai" />

      <CardBody>
        <CardContent>
          <div className="thumb">
            <div className="thumb-up">
              <ThumpUp width="18px" height="18px" />
            </div>
          </div>

          <H2>Malala Yousafzai</H2>
          <p className="small">
            <span>1 month ago</span> in Entertainment
          </p>
          <p className="description">
            Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
            eu velit libero.
          </p>

          <div className="actions">
            <div className="thumb-up active">
              <ThumpUp width="18px" height="18px" />
            </div>
            <div className="thumb-down">
              <ThumpDown width="18px" height="18px" />
            </div>
            <button type="button">Vote now</button>
          </div>
        </CardContent>

        <CardVotes widthUp={64} widthDown={36}>
          <VoteUp>
            <ThumpUp width="28px" height="28px" />
            <span>64%</span>
          </VoteUp>
          <VoteDown>
            <span>36%</span>
            <ThumpDown width="28px" height="28px" />
          </VoteDown>
        </CardVotes>
      </CardBody>
    </Card>
  </StyledCards>
);
