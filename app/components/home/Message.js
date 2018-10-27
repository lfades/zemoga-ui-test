import { StyledMessage } from './styles';
import { Close } from './icons';

export default () => (
  <StyledMessage>
    <div className="title">
      <p className="speak">Speak out. Be heard.</p>
      <p className="be-counted">Be counted</p>
    </div>
    <p className="text">
      Rule of Thumb is a crowd sourced court of public opinion where anyone and
      everyone can speak out and speak freely. It's easy: You share your
      opinion, we analyze and put the data in a public report.
    </p>
    <Close />
  </StyledMessage>
);
