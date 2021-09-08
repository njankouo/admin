import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
 
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  
  {
    title: 'Orders',
    icon: 'layout-outline',
    children: [
      {
        title: 'All',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Export Order(s)',
        link: '/pages/layout/list',
      },
      {
        title: 'Search Order(S)',
        link: '/pages/layout/infinite-list',
      },
       {
        title: 'Order transfer',
        link: '/pages/layout/tabs'
      },
    ],
  },
  {
    title: 'Products',
    icon: 'edit-2-outline',
   
  },
  {
    title: 'Shipping Profile',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
  },
  {
    title: 'Reports',
    icon: 'browser-outline',
    children: [
      {
        title: 'report',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'order',
        link: '/pages/modal-overlays/window',
      },
    ],
  },
  {
    title: 'Accounts',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Invoices',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Master Settings',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Settings',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
];
