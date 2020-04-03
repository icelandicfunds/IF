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
            We invest across different asset classes including financials assets, 
            real estate and real assets.
          </Text>
        </SectionHeader>
      </Section>

      <Section background="white">
        <SectionHeader title="How we invest" />
        <NumberedList columns={3}>
          <TextBlock title="Analysis" label="Fundamental investing">
            <Text>
              We rely on economic theory and analysis to help us deliver long-term, repeatable results.
            </Text>
            <Text>
              We use machine learning, distributed computing and other technologies.
            </Text>
          </TextBlock>
          <TextBlock title="We spread the risk" label="Diversification">
            <Text>
              All of our solutions are diversified.
            </Text>
            <Text>
              We invest across different types of assets, countries, 
              and industries, which spreads the risk of your investments.
            </Text>
          </TextBlock>
          <TextBlock
            title="We keep it simple"
            label="Simplicity"
          >
            <Text>
              If it is too complicated, it fosters too many unknowns.
            </Text>
            <Text>
              No one should invest in something that cannot be understood. 
            </Text>
            <Text>
              We like to keep it simple.
            </Text>
          </TextBlock>
        </NumberedList>
      </Section>
    </Layout>
  );
}

export default Home;
