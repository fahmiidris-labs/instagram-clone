import { classNames } from '@/utils/helpers';
import { ReactNode } from 'react';

type TMain = {
    className?: string;
    children: ReactNode;
};

export const Main = ({ className, children }: TMain) => {
    return <main className={classNames(className, '')}>{children}</main>;
};
