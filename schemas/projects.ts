import { defineField, Rule } from 'sanity';

const projectSector = [
  { title: 'Commercial', value: 'commercial' },
  { title: 'Residential', value: 'residential' },
  { title: 'Administrative', value: 'administrative' },
  { title: 'Touristic', value: 'touristic' },
  { title: 'Service', value: 'service' },
];

const projects = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(100).error('Maximum 100 Characters'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectContent1',
      title: 'Project Content 1',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'details1',
      title: 'Details 1',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'projectContent2',
      title: 'Project Content 2',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'details2',
      title: 'Details 2',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'projectContent3',
      title: 'Project Content 3',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'details3',
      title: 'Details 3',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'projectContent4',
      title: 'Project Content 4',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'details4',
      title: 'Details 4',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'projectContent5',
      title: 'Project Content 5',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'details5',
      title: 'Details 5',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'constructionWorks',
      title: 'Construction Works',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'finishingWorks',
      title: 'Finishing Works',
      type: 'text',
      validation: (Rule) => Rule.max(500).error('Minimum 500 Characters'),
    }),
    defineField({
      name: 'complementaryWorks',
      title: 'Complementary works',
      type: 'text',
    }),
    defineField({
      name: 'restaurantFinishingWorks',
      title: 'Restaurant Finishing Works',
      type: 'text',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(100).error('Maximum 100 Characters'),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required().error('Start Date is required'),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Set the end date if the project is not still in progress.',
      validation: (Rule) =>
        Rule.custom((endDate, context) => {
          const stillInProgress = context?.document?.stillInProgress;

          if (stillInProgress) {
            return true;
          }

          if (!endDate) {
            return 'End Date is required';
          }

          return true;
        }),
    }),
    defineField({
      name: 'stillInProgress',
      title: 'Still in Progress',
      type: 'boolean',
      initialValue: false,
      description: 'Check if the project is still ongoing.',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'file', type: 'file', title: 'FILE' },
          ],
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'object',
      fields: [
        { name: 'url', type: 'url', title: 'URL' },
        { name: 'file', type: 'file', title: 'FILE' },
      ],
    }),
    defineField({
      name: 'projectSector',
      title: 'Project Sector',
      type: 'string',
      options: {
        list: projectSector,
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'commercial',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required().error('Location is required'),
    }),
    defineField({
      name: 'latestProject',
      title: 'Latest Project',
      type: 'boolean',
      initialValue: false,
    }),
    // Add the 'isHidden' field to control whether a project is hidden
    defineField({
      name: 'isHidden',
      title: 'Hide this project',
      type: 'boolean',
      initialValue: false,
      description: 'Check this box to hide the project from the frontend.',
    }),
  ],
};

export default projects;
