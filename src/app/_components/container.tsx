import cn from 'classnames';

type Props = {
  id?: string;
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ id, children, className }: Props) => {
  return (
    <section id={id} className={cn('container', className)}>
      {children}
    </section>
  );
};

export default Container;
