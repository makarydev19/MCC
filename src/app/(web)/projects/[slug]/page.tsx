import { generateProjectMetadata } from '@/libs/metadata';
import { Metadata } from 'next';
import ProjectsDetails from './ProjectDetails';
import Script from 'next/script';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return generateProjectMetadata(params.slug);
}

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: 'Modern Construction Project',
    description: 'High-quality construction services provided by MCC.',
    url: `https://mcc-egy.com/projects/${params.slug}`,
    image: 'https://mcc-egy.com/default-image.jpg',
    datePublished: '2024-01-01',
    dateModified: '2024-03-30',
    author: {
      '@type': 'Organization',
      name: 'Modern Construction Company',
      url: 'https://mcc-egy.com',
    },
  };

  return (
    <>
      <Script
        id="project-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProjectsDetails params={params} />
    </>
  );
};

export default ProjectPage;
