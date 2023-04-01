import { Link } from 'react-router-dom';
import TransitionContainer from '@/components/TransitionContainer';

const NotFound = () => {
  return (
    <>
      <TransitionContainer>
        <Link to='/'>404: Go Home</Link>
      </TransitionContainer>
    </>
  );
};

export default NotFound;
