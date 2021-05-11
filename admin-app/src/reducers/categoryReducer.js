import { categoryConstants } from '../actions/constants';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const buildNewCategories = (id, categories, category) => {
  let myCategories = [];

  for (let cat of categories) {
    if (cat.parentId && cat.parentId === id) {
      myCategories.push({
        ...cat,
        children:
          cat.children && cat.children.length > 0
            ? buildNewCategories(
                id,
                [
                  ...cat.children,
                  {
                    _id: category._id,
                    name: category.name,
                    parentId: category.parentId,
                    children: category.children,
                  },
                ],
                category
              )
            : [],
      });
    } else {
      myCategories.push({
        ...cat,
        children:
          cat.children && cat.children.length > 0
            ? buildNewCategories(id, cat.children, category)
            : [],
      });
    }
  }

  return myCategories;
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload.categories,
      };
    case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
      const updatedCategories = buildNewCategories(
        state.categories,
        action.payload.category
      );
      console.log(updatedCategories);
      return {
        ...state,
        loading: false,
      };
    case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
      return { ...initialState };
    default:
      return state;
  }
};
