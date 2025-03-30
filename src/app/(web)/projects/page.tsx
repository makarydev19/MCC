import Projects from './Projects';
import { metadataConfig } from '@/libs/metadata';

export const metadata = metadataConfig.projects;

export default function Page() {
  return <Projects />;
}
