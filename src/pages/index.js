import React, { useState } from 'react';

import {
  LightCta,
  Section,
  SectionTitle,
  Button,
  Text,
  TextBlock,
  Hero,
  SectionHeader,
  SmallText,
  NumberedList,
  Card,
  CardsRow,
} from '@algolia/ui-library';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import showcaseProjects from './showcase-projects.json';
import demoProjects from './demo-projects.json';
import ApplyForm from '../components/ApplyForm.js';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const currentTheme =
    typeof document !== 'undefined'
      ? document.querySelector('html').getAttribute('data-theme')
      : '';
  const { themeConfig = {} } = siteConfig;
  const [theme, setTheme] = useState(currentTheme);
  const { navbar = {} } = themeConfig;
  const { logo = {} } = navbar;

  const logoUrl = useBaseUrl(theme === 'dark' ? logo.src_theme.dark : logo.src_theme.light);

  return (
    <Layout
      title="Icelandic funds: Capital growth"
      description="Innovative solutions to accelerate capital growth"
      theme={theme}
      setTheme={setTheme}
    >
      <Hero
        id="hero"
        background="curves"
        title={siteConfig.tagline}
        cta={[
          <Button primary style={{ textDecoration: 'none' }} href={useBaseUrl("/docs/about/overview")}>
            More
          </Button>,
        ]}
      />

      <Section>
        <SectionHeader title="Capital growth">
          <Text style={{ maxWidth: '800px' }}>
            We offer a range of solutions for institutions, financial professionals 
            and individuals across the globe.
          </Text>
          <Text style={{ maxWidth: '800px' }}>
            We invest across a wide range of asset classes including private equity, 
            real estate, public debt and equity, and real assets.
          </Text>
        </SectionHeader>
      </Section>

      <Section background="white">
        <SectionHeader title="How we invest" />
        <NumberedList columns={3}>
          <TextBlock title="We meet your needs" label="Your needs">
            <Text>
              We first ask you about your goals and risk preference.
            </Text>
            <Text>
              With that information, we help you choose a portfolio that meets your needs.
            </Text>
          </TextBlock>
          <TextBlock title="We spread the risk" label="Diversification">
            <Text>
              All of our portfolios are diversified.
            </Text>
            <Text>
              Your money is invested across different types of assets, countries, 
              and industries, which spreads the risk of your investments while 
              improving your opportunity for higher returns.
            </Text>
          </TextBlock>
          <TextBlock
            title="You add docsearch.js to your docs"
            label="Implementation"
          >
            <Text>
              We'll send you a script that integrates Algolia's autocomplete to
              power your search.
            </Text>
            <Text>
              You will receive the same speed, relevance, and best-in-class UX
              as our paying customers.
            </Text>
          </TextBlock>
        </NumberedList>
      </Section>
    </Layout>
  );
}

export default Home;
