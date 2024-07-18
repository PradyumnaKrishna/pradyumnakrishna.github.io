import { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  link: string;
  align?: 'left' | 'right';
  className?: string;
  children?: ReactNode;
};

export function SimpleLink({ link, align = 'left', className, children }: Props) {
  const line = (
    <span className="mx-4 h-px w-8 bg-gray-400 transition-all group-hover:w-16 group-hover:bg-gray-800 dark:group-hover:bg-gray-100 group-focus-visible:w-16 group-focus-within:bg-gray-800 dark:group-focus-visible:bg-gray-100 motion-reduce:transition-none"></span>
  );
  const linkText = (
    <span className="font-semibold uppercase tracking-widest text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-100 group-focus-visible:text-gray-800  dark:group-focus-visible:text-gray-100">
      {children}
    </span>
  );

  return (
    <a className={cn('group flex items-center py-3', className)} href={link}>
      {align === 'left' ? (
        <>
          {line}
          {linkText}
        </>
      ) : (
        <>
          {linkText}
          {line}
        </>
      )}
    </a>
  );
}

type LinkIconProps = {
  link: string;
  children?: ReactNode;
};

export function IconLink({ link, children }: LinkIconProps) {
  return (
    <a
      className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 transition"
      href={link}
    >
      {children}
    </a>
  );
}
