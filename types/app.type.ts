import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

type TMeta = {
    title?: string;
    metaTitle?: string;
    description?: string;
    metaDescription?: string;
};

export type TAppLayout = {
    className?: string;
    children: ReactNode;
};

type TLayoutProps = {
    Layout?: ({ className, children }: TAppLayout) => JSX.Element;
    meta?: TMeta;
};

export type NextPageWithLayout = NextPage & {
    layoutProps?: TLayoutProps;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
