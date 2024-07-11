import { defineField, Rule } from "sanity";



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
            name: "projectName",
            title: "Project Name",
            type: "string",
            validation: Rule => Rule.required().max(50).error('Maximum 50 Characters')
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: 'name',
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: Rule => Rule.required().max(200).error('Minimum 100 Characters')
        }),
        defineField({
            name: "client",
            title: "Client",
            type: "string",
            validation: Rule => Rule.required().max(50).error('Maximum 50 Characters')
        }),
        defineField({
            name: "startDate",
            title: "Start Date",
            type: 'date',
            validation: Rule => Rule.required().error('Start Date is required'),
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            description: 'Set the end date if the project is not still in progress.',
            validation: (Rule: Rule) => Rule.custom((endDate: string | undefined, context: any) => {
                const stillInProgress = context.document.stillInProgress;

                if (stillInProgress) {
                    return true;
                }

                if (!endDate) {
                    return 'End Date is required';
                }

                return true;
            })
        }),
        defineField({
            name: 'stillInProgress',
            title: 'Still in Progress',
            type: 'boolean',
            initialValue: false,
            description: 'Check if the project is still ongoing.',
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [{
                type: 'object',
                fields: [
                    { name: 'url', type: 'url', title: 'URL' },
                    { name: 'file', type: 'file', title: 'FILE' },
                ],
            },
            ],
            validation: Rule => Rule.required().min(3).error('Minimum of 3 images required'),
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "object",
            fields: [
                { name: 'url', type: 'url', title: 'URL' },
                { name: 'file', type: 'file', title: 'FILE' },
            ],
            validation: Rule => Rule.required().error('Cover Image is required'),
        }),
        defineField({
            name: 'projectSector',
            title: 'Project Sector',
            type: 'string',
            options: {
                list: projectSector,
            },
            validation: Rule => Rule.required(),
            initialValue: 'commercial',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: Rule => Rule.required().error('Location is required'),
        }),
        defineField({
            name: 'latestProject',
            title: 'Latest Project',
            type: 'boolean',
            initialValue: false,
        }),

    ],
}

export default projects;

