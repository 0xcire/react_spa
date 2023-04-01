import { FC, PropsWithChildren, ReactNode } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

type steps = 'initial' | 'animate' | 'exit';
type Opacity = Record<'opacity', number>;
type Transition = Record<steps, Opacity>;

const pageTransition: Transition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

type PageProps = PropsWithChildren<{
  children: ReactNode;
}>;

const TransitionContainer: FC<PageProps> = ({ children }: PageProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className='h-full grid place-items-center'
        variants={pageTransition}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default TransitionContainer;
