import Container from '@/app/_components/container';
import { EXAMPLE_PATH } from '@/lib/constants';
import cn from 'classnames';

type Props = {
  message: string;
};

const Alert = ({ message }: Props) => {
  return (
    <div className="border-b">
      <Container>
        <div className="py-2 text-center text-sm">{message}</div>
      </Container>
    </div>
  );
};

export default Alert;
