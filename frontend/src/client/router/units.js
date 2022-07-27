export default [
    // {
    //     path: '/units',
    //     name: 'view-units',
    //     component: () => import('../views/Unit/index'),
    //     meta: {
    //         pageTitle: 'Units',
    //         breadcrumb: [
    //             {
    //                 text: 'Units',
    //                 active: true,
    //             },
    //         ],
    //     },
    // },
    // {
    //     path: '/units/create',
    //     name: 'create-units',
    //     component: () => import('../views/Unit/form'),
    //     meta: {
    //         pageTitle: 'Units',
    //         breadcrumb: [
    //
    //             {
    //                 text: 'Unit Create',
    //                 active: true,
    //             },
    //         ],
    //     },
    // },
    {
        path: '/units/:id/edit',
        name: 'edit-units',
        component: () => import('../views/Unit/form'),
        meta: {
            mode:'edit',
            pageTitle: 'Units',
            breadcrumb: [
                {
                    text: 'Unit Edit',
                    active: true,
                },
            ],
        },
    },
]
