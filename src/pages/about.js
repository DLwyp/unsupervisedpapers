import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../site-config'
import { Pane, Paragraph, Heading,Text } from 'evergreen-ui'

export default ({location}) => (
  <Layout location={location} 
    header_bg="/header_bg_about.svg"
    header={
      <Pane
        maxWidth={1024}
        className="sub-header"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginLeft="auto"
        marginRight="auto"
      >
        <Heading color="white" size={900}>About</Heading>
      </Pane>
    }
  >

    <Pane
      is="main"
      marginTop={42}
      marginBottom={96}
      maxWidth={1024}
      display="flex"
      marginLeft="auto"
      marginRight="auto"
    >
      <Helmet>
        <title>{`About | ${config.siteTitle}`}</title>

        <meta name="og:title" content={`About | ${config.siteTitle}`} />
        <meta name="og:url" content={`${config.siteUrl}${location.pathname}`} />
        <meta name="og:image" content={`${config.siteUrl}/about.jpg`} />

        <meta name="twitter:title" content={`About | ${config.siteTitle}`} />
        <meta name="twitter:image" content={`${config.siteUrl}/about.jpg`} />
      </Helmet>

      <Pane 
        marginRight={15}
        marginLeft={15}
        display="flex" 
        flexDirection="column"
      >
        <Heading size={700}>What is Unsupervised Papers?</Heading>
        <Paragraph size={500} marginTop="1em" marginBottom="2em">Unsupervised Papers is an open-source directory of unsupervised machine learning papers, tasks and methods with links to articles, websites, videos and code.</Paragraph>

        <Heading size={700}>Who is Unsupervised Papers for?</Heading>
        <Paragraph size={500} marginTop="1em" marginBottom="2em">It is intended to serve a few audiences in particular. First the machine learning researcher or practitioner who would like a quick reference to the state of the art in unsupervised methods will find this site useful. Also, this will be an invaluable tool for students and educators to assist with in-depth research into the field. And lastly, it will be a great resource for hackers and ameture artificial intelligence enthusiasts to dip their toe into what promises to be a field with a very exciting future.</Paragraph>

        <Heading size={700}>How can I contribute?</Heading>
        <Paragraph size={500} marginTop="1em" marginBottom="2em">The entire directory is free and open-source. This is a collaborative project and contributions are welcome via our GitHub page <a href="https://github.com/virtualgraham/unsupervisedpapers">https://github.com/virtualgraham/unsupervisedpapers</a>. All the entries from the site are encoded as markdown and image files in the repository. This enables the free and open, but moderated system of changes that Git was built for.</Paragraph>

        <Heading size={700}>Criteria for Inclusion</Heading>
        <Paragraph size={500} marginTop="1em">Generally papers included in the Unsupervised Papers index meet the following criteria:</Paragraph>
        <ul>
          <li><Text size={500}>Are primally focused on unsupervised or self-supervised learning methods or cited as components to these methods.</Text></li>
          <li><Text size={500}>Has a freely available PDF file of the full text</Text></li>
          <li><Text size={500}>Is in the <a href="https://www.semanticscholar.org/">Semantic Scholar</a> corpus</Text></li>
        </ul>
        

        <Paragraph size={500} marginTop="1em" marginBottom="2em">Have questions or feedback? Contact me at <a href="mailto:virtualgraham@unsupervisedpapers.com">virtualgraham@unsupervisedpapers.com</a>.</Paragraph>
      </Pane>
    </Pane>
  </Layout>
)