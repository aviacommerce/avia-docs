/**
 * Copyright (c) 2015-present, Aviabird
 *
 * @emails avia-core
 */

import Link from 'gatsby-link';
import React from 'react';
import {colors, media} from 'theme';

const ArrowSvg = ({cssProps = {}}) => (
  <svg
    css={cssProps}
    height="12"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 4.53657 8.69699">
    <path
      d={`
        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
        0,0,1,.18254,8.697Z
      `}
      fill="currentColor"
    />
  </svg>
);

const ButtonLink = ({children, type, ...rest}) => {
  let typeStyle;
  switch (type) {
    case 'primary':
      typeStyle = primaryStyle;
      break;
    case 'secondary':
      typeStyle = secondaryStyle;
      break;
  }

  let is_external = rest.is_external || false;

  if (is_external)
    return(
      <a href={rest.to} css={[style, typeStyle]} target="blank">
        {children}
      </a>
    );

  else
    return (
      <Link {...rest} css={[style, typeStyle]}>
        {children}
        {type === 'secondary' && <ArrowSvg cssProps={{marginLeft: 10}} />}
      </Link>
    );
};

const style = {
  display: 'inline-block',
  fontSize: 16,

  [media.greaterThan('xlarge')]: {
    fontSize: 20,
  },
};

const commonStyle = {
  borderRadius: 2,
  transition: 'color 0.2s ease-out',
  padding: '10px 25px',
  border: 'solid 1px',
  borderColor: colors.dark,
  boxShadow: 'rgba(0,0,0,0.2) 0px 1px 3px 1px',

  [media.greaterThan('xlarge')]: {
    paddingTop: 12,
    paddingBottom: 12,
  },
};

const primaryStyle = {
  ...commonStyle,
  backgroundColor: colors.dark,
  color: colors.white,
  fontWeight: 'bold',
  whiteSpace: 'nowrap',

  ':hover': {
    //backgroundColor: colors.darker,
  },
};

const secondaryStyle = {
  ...commonStyle,
  color: colors.dark,

  ':hover': {
    //color: colors.white,
  },
};

export default ButtonLink;
