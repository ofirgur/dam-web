import React from 'react';
import { manageProductsColumns as columns } from '../../utils/constants';
import { Product } from '../../utils/types';
import ActionsColumn from './components/ActionsColumn';

type ManageProductTableProps = {
  products: Product[];
};

export const ManageProductTable = (props: ManageProductTableProps) => {
  const { products } = props;
  console.log('products: ', products);
  return <div>aaa</div>;
};

export default ManageProductTable;
