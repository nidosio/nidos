import React, { FC } from 'react';
import styled from 'styled-components';

import { shadows } from 'styles/base';

interface Props {
  url: string;
  description: string;
}

const Img = styled.img`
  width: 100%;
  box-shadow: ${shadows['3']};
`;

const BookImage: FC<Props> = ({ url, description }) => (
  <Img src={url} alt={description} />
);

export default BookImage;
