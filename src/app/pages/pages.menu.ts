export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'inicio',
        data: {
          menu: {
            title: 'Inicio',
            icon: 'ion-home',
            selected: false,
            expanded: false,
            order: 300,
          },
        },
        children: [
          {
            path: 'actividades',
            data: {
              menu: {
                title: 'Actividades',
                icon: 'ion-clipboard',
                selected: false,
                expanded: false,
                order: 300,
              },
            },
          },
          {
            path: 'publicaciones',
            data: {
              menu: {
                title: 'Publicaciones',
                icon: 'ion-folder',
                selected: false,
                expanded: false,
                order: 300,
              },
            },
          },
        ],
      },
      {
        path: 'ministerios',
        data: {
          menu: {
            title: 'Ministerios',
            icon: 'ion-university',
            selected: false,
            expanded: false,
            order: 300,
          },
        },
      },
      {
        path: 'servicios',
        data: {
          menu: {
            title: 'Servicios',
            icon: 'ion-ios-world',
            selected: false,
            expanded: false,
            order: 300,
          },
        },
      },
      {
        path: 'contacto',
        data: {
          menu: {
            title: 'Contacto',
            icon: 'ion-android-call',
            selected: false,
            expanded: false,
            order: 300,
          },
        },
      },
    ],
  },
];
