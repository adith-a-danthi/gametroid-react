import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Games',
    categoryImage:
      'https://assets.xboxservices.com/assets/88/e9/88e9daca-2bb4-437c-8f5d-afb7266b0e57.jpg?n=Games-Hub_Home-Hero-0_XGP_1067x667_04.jpg',
    description: '',
  },
  {
    _id: uuid(),
    categoryName: 'Consoles',
    categoryImage:
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: '',
  },
  {
    _id: uuid(),
    categoryName: 'Accessories',
    categoryImage:
      'https://images.unsplash.com/photo-1590845947376-2638caa89309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: '',
  },
];
