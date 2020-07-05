import React, { FC, PropsWithChildren } from 'react';
import Header from 'components/navigation/Header/Header';

type Props = PropsWithChildren<unknown>;

const DefaultLayout: FC<Props> = ({ children }: Props) => (
  <>
    <Header />
    {children}
  </>
);

export default DefaultLayout;
