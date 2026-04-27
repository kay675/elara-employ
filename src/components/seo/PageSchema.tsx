import { Helmet } from "react-helmet-async";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
}

/**
 * Injects schema.org Service JSON-LD for service pages.
 */
export const ServiceSchema = ({
  name,
  description,
  url,
  serviceType = "Employer of Record",
  areaServed = "Kosovo",
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    areaServed: { "@type": "Country", name: areaServed },
    provider: {
      "@type": "Organization",
      name: "Elara EOR",
      url: "https://elara-eor.com",
    },
  };

  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface MetaTagsProps {
  title: string;
  description: string;
  canonical: string;
}

export const MetaTags = ({ title, description, canonical }: MetaTagsProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
  </Helmet>
);
