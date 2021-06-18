import React from 'react';

import Layout from '../components/layout.component';

const Generic = ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <p>{pageContext.description}</p>
  </Layout>
);

export default Generic;
