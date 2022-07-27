export default [
    {
        path: '/companies',
        name: 'view-companies',
        component: () => import('../views/Company/index'),
        meta: {
            pageTitle: 'Companies',
            breadcrumb: [
                {
                    text: 'Companies',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/companies/create',
        name: 'create-companies',
        component: () => import('../views/Company/form'),
        meta: {
            pageTitle: 'Companies',
            breadcrumb: [

                {
                    text: 'Companies Create',
                    active: true,
                },
            ],
        },
    },
]
