import { MetadataRoute } from 'next';
import { getProjects } from '@/libs/apis';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  const staticPages = [
    { url: 'https://mcc-egy.com', lastModified: new Date() },
    { url: 'https://mcc-egy.com/about', lastModified: new Date() },
    { url: 'https://mcc-egy.com/services', lastModified: new Date() },
    { url: 'https://mcc-egy.com/projects', lastModified: new Date() },
    { url: 'https://mcc-egy.com/contact', lastModified: new Date() },
  ];

  const projectPages = projects.map((project) => ({
    url: `https://mcc-egy.com/projects/${project.slug}`,
  }));

  return [...staticPages, ...projectPages];
}
