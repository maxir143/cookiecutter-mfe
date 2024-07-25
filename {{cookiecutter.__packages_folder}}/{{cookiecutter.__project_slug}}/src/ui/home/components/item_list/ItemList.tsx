import { Item } from './components/item/Item';
import { useItemsProvider } from './useItemsProvider';

export const ItemList = () => {
  const items = useItemsProvider();

  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-3">
          <Item {...item} />
        </div>
      ))}
    </div>
  );
};
