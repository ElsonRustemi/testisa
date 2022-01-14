import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_ADMIN: NbMenuItem[] = [
  {
    title: 'home',
    icon: 'home-outline',
    // hidden: true,
    link: '/pages/home',
    home:true
  },
  {
    title: 'Create User',
    icon: 'person-add-outline',
    link: '/pages/home/createuser',
  },
  {
    title: 'Manage Users',
    icon: 'person-outline',
    link: '/pages/home/manageusers',
  },
  {
    title: 'Insert CF',
    icon: 'plus-circle-outline',
    link: '/pages/home/insertcf',
    // queryParams: { form: 'linea' },
  },
  {
    title: 'List CF',
    icon: 'folder-outline',
    link: '/pages/home/cflist',
    queryParams: { form: 'avvio-fine' },
    //home: true,
  },
  {
    // layers-outline
    title: 'Compare CF',
    icon: 'copy-outline',
    //link: '/pages/form4',
    link: '/pages/home/comparecf',
    queryParams: { form: 'lastre' },
  },
  {
    title: 'Analyze CF',
    icon: 'file-text-outline',
    link: '/pages/home/analyzecf',
    //home: true,
  },
  {
    title: 'Comparison Reports',
    icon: 'hard-drive-outline',
    //link: '/pages/form3',
    link: '/pages/home/comparisonreports',
    queryParams: { form: 'materie-prime' },
    //home: true,
  },
  {
    title: 'Logout',
    icon: 'corner-down-left-outline',
    //link: '/pages/form3',
    link: '/',
    queryParams: { form: 'materie-prime' },
    //home: true,
  }
];
