import React from 'react';
import SEO from '../components/Seo';
import Landing from '../components/Landing';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
  </Layout>
);

export default IndexPage;
