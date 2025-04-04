import { Project } from '@/models/project';
import sanityClient from './sanity';
import * as queries from './sanityQueries';

export async function getProjects() {
  const result = await sanityClient.fetch<Project[]>(
    queries.getProjectsQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}

export async function getProject(slug: string) {
  const result = await sanityClient.fetch<Project>(
    queries.getProject,
    { slug },
    { cache: 'no-cache' }
  );

  return result;
}
