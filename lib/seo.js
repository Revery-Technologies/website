const description = "Revery Technologies' mission is to decrease the impact of mental health issues, such as depression and anxiety, for high school students."

export default {
  title: 'Revery Technologies',
  description,
  canonical: 'https://revery.now.sh/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://revery.now.sh/',
    title: 'Revery Technologies',
    description,
    images: [
      {
        url: 'https://revery-branding.now.sh/logo.png',
        width: 100,
        height: 100,
        alt: 'Revery Technologies Logo'
      }
    ],
    site_name: 'Revery Technologies'
  },
  twitter: {
    handle: '@revery-technologies',
    site: '@revery-technologies',
    cardType: 'summary_large_image'
  }
}
