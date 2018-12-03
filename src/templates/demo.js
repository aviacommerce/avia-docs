/**
 * Copyright (c) 2015-present, Aviabird
 *
 * @emails avia-core
 */

import MarkdownPage from 'components/MarkdownPage';
import PropTypes from 'prop-types';
import React from 'react';
import {createLinkDemo} from 'utils/createLink';
import {sectionListDemo} from 'utils/sectionList';


const Demo = ({data, location}) => (
  <MarkdownPage
    createLink={createLinkDemo}
    location={location}
    markdownRemark={data.markdownRemark}
    sectionList={sectionListDemo}
    titlePostfix=" &ndash; AviaCommerce"
  />
);

Demo.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query TemplateDemoMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        next
        prev
      }
      fields {
        path {
          id
        }
        slug
      }
    }
  }
`;

export default Demo;
