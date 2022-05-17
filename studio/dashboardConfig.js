export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62838598eca7a26e0a499d98',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-demo-studio-o7mnw7jr',
                  apiId: 'e6d5d038-7ccf-46c8-ae1a-f48132f105c7'
                },
                {
                  buildHookId: '62838599af601a2fa99a047b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-demo-web-72enwfrc',
                  apiId: '5501576c-707f-4d00-a6c9-cb090f904f47'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrkaluzny/sanity-nextjs-landing-pages-demo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-demo-web-72enwfrc.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
