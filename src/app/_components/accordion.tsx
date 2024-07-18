'use client';

import { useState } from 'react';
import cn from 'classnames';
import styles from './accordion.module.scss';

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Accordion = ({ title, children }: Props) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className={cn(styles.accordion, { [styles['active']]: active })}>
      <div className={styles.accordion__header} onClick={toggleActive}>
        <h3 className="uppercase">{title}</h3>
        <span className={cn('transition-transform duration-500', { 'rotate-180': active })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="1.5em"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
      </div>
      <div className={styles.accordion__body}>{children}</div>
    </div>
  );
};

export default Accordion;
