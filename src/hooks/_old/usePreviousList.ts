import usePrevious from './usePrevious';

export default (items: []) => {
  const list: undefined[] = [];
  items.forEach((item) => {
    list.push(usePrevious(item));
  });

  return list;
};
