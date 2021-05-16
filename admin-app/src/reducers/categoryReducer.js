import { categoryConstants } from '../actions/constants';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const buildNewCategories = (parentId, categories, category) => {
  let myCategories = [];

  if (parentId == undefined) {
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        type: category.type,
        children: [],
      },
    ];
  }

  for (let cat of categories) {
    if (cat._id == parentId) {
      const newCategory = {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        parentId: category.parentId,
        type: category.type,
        children: [],
      };
      myCategories.push({
        ...cat,
        children:
          cat.children.length > 0
            ? [...cat.children, newCategory]
            : [newCategory],
      });
    } else {
      myCategories.push({
        ...cat,
        children: cat.children
          ? buildNewCategories(parentId, cat.children, category)
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
      const category = action.payload.category;
      const updatedCategories = buildNewCategories(
        category.parentId,
        state.categories,
        category
      );
      console.log('UPDATED CATEGORIES ', updatedCategories);
      return {
        ...state,
        categories: updatedCategories,
        loading: false,
      };
    case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
      return { ...initialState };

    case categoryConstants.UPDATE_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case categoryConstants.UPDATE_CATEGORIES_SUCCESS:
      return { ...state, loading: false };
    case categoryConstants.UPDATE_CATEGORIES_FAILURE:
      return { ...state, error: action.payload.error, loading: false };

    case categoryConstants.DELETE_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case categoryConstants.DELETE_CATEGORIES_SUCCESS:
      return { ...state, loading: false };
    case categoryConstants.DELETE_CATEGORIES_FAILURE:
      return { ...state, error: action.payload.error, loading: false };

    default:
      return state;
  }
};
