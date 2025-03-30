import { Metadata } from 'next';
import { getProject } from './apis';

const BASE_URL = 'https://mcc-egy.com';

export const metadataConfig = {
  home: {
    title: 'Modern Construction Company - Home',
    description:
      'We build your dreams From concept to completion, We craft your dreams into existence...',
    keywords: [
      'Modern Construction Company',
      'MCC',
      'Construction in Egypt',
      'Building Services',
    ],
    openGraph: {
      title: 'Modern Construction Company - Home',
      description:
        'We build your dreams From concept to completion, We craft your dreams into existence...',
      url: BASE_URL,
      siteName: 'Modern Construction Company',
      images: [
        {
          url: `${BASE_URL}/MCC-LOGO.png`,
          width: 500,
          height: 500,
          alt: 'Modern Construction Company Logo',
        },
      ],
      type: 'website',
    },
  },
  about: {
    title: 'About Us - Modern Construction Company',
    description: 'We specialize in turning your vision into reality...',
    keywords: [
      'About MCC',
      'Modern Construction Company',
      'Construction Experts',
    ],
    openGraph: {
      title: 'About Us - Modern Construction Company',
      description: 'We specialize in turning your vision into reality...',
      url: `${BASE_URL}/about`,
      type: 'article',
    },
  },
  services: {
    title: 'Our Services - Modern Construction Company',
    description:
      'Building the future with Comprehensive Construction Solutions',
    keywords: [
      'Construction Services',
      'Building Solutions',
      'MCC Services',
      'Concrete work of all kinds',
      'Infrastructure Works',
      'Finishing Works',
      'Landscape Works',
      'Electro-Mechanical Works',
    ],
    openGraph: {
      title: 'Our Services - Modern Construction Company',
      description:
        'Building the future with Comprehensive Construction Solutions',
      url: `${BASE_URL}/services`,
      type: 'website',
    },
  },
  projects: {
    title: 'Our Projects - Modern Construction Company',
    description:
      'From blueprints to grand openings, see our projects come to life',
    keywords: ['MCC Projects', 'Construction Portfolio', 'Completed Projects'],
    openGraph: {
      title: 'Our Projects - Modern Construction Company',
      description:
        'From blueprints to grand openings, see our projects come to life',
      url: `${BASE_URL}/projects`,
      type: 'website',
    },
  },
  contact: {
    title: 'Contact Us - Modern Construction Company',
    description:
      'Whether you have inquiries, project proposals, or feedback, we welcome your engagement as a valued partner in achieving project success.',
    keywords: ['Contact MCC', 'Construction Support', 'Get in Touch'],
    openGraph: {
      title: 'Contact Us - Modern Construction Company',
      description:
        'Whether you have inquiries, project proposals, or feedback, we welcome your engagement as a valued partner in achieving project success.',
      url: `${BASE_URL}/contact`,
      type: 'website',
    },
  },
};

// Function to generate metadata for project detail pages
export async function generateProjectMetadata(slug: string): Promise<Metadata> {
  const project = await getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Modern Construction Company',
      description: 'This project does not exist or has been removed.',
    };
  }

  // Ensure the cover image is a string (extract `url` if it's an object)
  const coverImageUrl =
    typeof project.coverImage === 'string'
      ? project.coverImage
      : project.coverImage?.url || '/default-project.jpg'; // Fallback if undefined

  return {
    title: `${project.projectName} | Modern Construction Company`,
    description: `Explore the details of ${project.projectName}, a project by Modern Construction Company.`,
    openGraph: {
      title: `${project.projectName} | Modern Construction Company`,
      description: `Explore the details of ${project.projectName}, a project by Modern Construction Company.`,
      url: `https://mcc-egy.com/projects/${project.slug.current}`,
      images: [
        {
          url: coverImageUrl, // Ensure this is a string
          width: 1200,
          height: 630,
          alt: `${project.projectName} Cover Image`,
        },
      ],
      type: 'article',
    },
  };
}
