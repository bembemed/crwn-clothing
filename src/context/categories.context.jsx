import { createContext, useState , useEffect} from 'react';

// import SHOP_DATA from '../shop-data.js';

import { addCollectionAndDocuments , getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';
export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  useEffect(()=>{
    // addCollectionAndDocuments('categories', SHOP_DATA)
    const getCatetegoriesMap = async ()=>{
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCatetegoriesMap();
  }, [])
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value }>
      {children}
    </CategoriesContext.Provider>
  );
};