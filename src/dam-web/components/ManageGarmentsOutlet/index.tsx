import React, { useState, useEffect } from 'react';
import { getProductsAPI } from '../../utils/api';
import { useManageGarmentsContext } from '../../utils/state/context';
import ManageGarmentsIndex from '../ManageGarmentsIndex';

const ManageGarmentsOutlet = () => {
  const [ready, setReady] = useState(false);
  const { setManageGarmentsState } = useManageGarmentsContext();

  useEffect(() => {
    const setProducts = () => {
      getProductsAPI().then((response) => {
        setManageGarmentsState({
          products: response.data,
        });
        setReady(true);
      });
    };

    setProducts();
  }, []);

  if (!ready) return <div>...fetching</div>;

  return <ManageGarmentsIndex />;
};

export default ManageGarmentsOutlet;
