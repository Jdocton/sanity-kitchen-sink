export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f7b9444d56539552e03e971',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fvs19mz5',
                  apiId: 'f2e82e4d-20d0-4c87-bf2b-4021a6008301'
                },
                {
                  buildHookId: '5f7b9445d97c6c5ad144ec2c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qx24yr8x',
                  apiId: '96d052ae-6c9c-4a5b-94d5-695b60a7cf61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jdocton/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qx24yr8x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
