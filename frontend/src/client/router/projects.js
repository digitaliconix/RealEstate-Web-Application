export default [
    {
        path: '/projects',
        name: 'view-projects',
        component: () => import('../views/Project/index'),
        meta: {
            pageTitle: 'Projects',
            breadcrumb: [
                {
                    text: 'Projects',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/projects/create',
        name: 'create-projects',
        component: () => import('../views/Project/form'),
        meta: {
            pageTitle: 'Projects',
            breadcrumb: [

                {
                    text: 'Projects Create',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/projects/:id/edit',
        name: 'edit-projects',
        component: () => import('../views/Project/form'),
        meta: {
            mode:'edit',
            pageTitle: 'Projects',
            breadcrumb: [
                {
                    text: 'Projects Edit',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/projects/setup/:id',
        name: 'edit-project-setup',
        component: () => import('../views/Project/Setup/Index'),
        meta: {
            pageTitle: 'Projects',
            breadcrumb: [
                {
                    text: 'Project Setup',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/projects/:id/units',
        name: 'view-units',
        component: () => import('../views/Project/Unit/index'),
        meta: {
            pageTitle: 'Project',
            breadcrumb: [
                {
                    text: 'Project Units',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/projects/:id/units/create',
        name: 'create-units',
        component: () => import('../views/Project/Unit/form'),
        meta: {
            pageTitle: 'Project Units',
            breadcrumb: [
                {
                    text: 'Unit Create',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/projects/:project/units/:id/edit',
        name: 'edit-units',
        component: () => import('../views/Project/Unit/form'),
        meta: {
            mode:'edit',
            pageTitle: 'Project Units',
            breadcrumb: [
                {
                    text: 'Unit Edit',
                    active: true,
                },
            ],
        },
    },
]
