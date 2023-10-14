type TChildren = {
  name: string;
  url: string;
};

type TMainNavigation = {
  name: string;
  url: string;
  hasChildren: boolean
  children?: TChildren[];
};

export const mainNavigations: TMainNavigation[] = [
  {
    name: 'Items',
    url: '/items',
    hasChildren: false,
  },
];
