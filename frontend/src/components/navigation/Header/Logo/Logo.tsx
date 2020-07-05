import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledImg = styled.img`
  width: 7rem;
`;

const Logo: FC = () => {
  return (
    <Link href="/">
      <StyledImg alt="Nidos Logo" src="/logo.svg" />
    </Link>
  );
};

export default Logo;
