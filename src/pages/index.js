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
        <SectionHeader title="A multi-asset approach to capital growth">
          <Text style={{ maxWidth: '800px' }}>
            We aim to provide a multi-asset approach, which allows us to take 
            advantage of multiple growth investment opportunities. 
          </Text>
          <Text style={{ maxWidth: '800px' }}>
            We are committed to helping you find suitable investments for growth 
            generation with robust solutions, risk monitoring and flexible asset allocation. 
          </Text>
        </SectionHeader>
      </Section>

      <Section>
        <SectionHeader title="How it works" />
        <NumberedList columns={3}>
          <TextBlock title="We scrape your documentation" label="Scraping">
            <Text>
              We built a website crawler designed to index every section of your
              documentation.
            </Text>
            <Text>
              Just send us the URL of your documentation, and we’ll run the
              scraper every 24h so you’re always up-to-date.
            </Text>
          </TextBlock>
          <TextBlock title="We configure your search" label="Configuration">
            <Text>
              You don’t need to configure any settings or even have an Algolia
              account.
            </Text>
            <Text>
              We take care of this automatically to ensure the best
              documentation search experience.
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
