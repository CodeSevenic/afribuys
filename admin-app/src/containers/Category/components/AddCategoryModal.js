import React from 'react';
import Input from '../../../components/UI/Input/Input';
import NewModal from '../../../components/UI/Modal/Modal';

const AddCategoryModal = (props) => {
  const {
    show,
    handleClose,
    modalTitle,
    categoryName,
    setCategoryName,
    parentCategoryId,
    setParentCategoryId,
    handleCategoryImage,
    categoryList,
  } = props;
  return (
    <NewModal show={show} handleClose={handleClose} modalTitle={modalTitle}>
      <Input
        value={categoryName}
        placeholder={`Category Name`}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <select
        className="form-control"
        value={parentCategoryId}
        onChange={(e) => setParentCategoryId(e.target.value)}
      >
        <option>select category</option>
        {categoryList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <input type="file" name="categoryImage" onChange={handleCategoryImage} />
    </NewModal>
  );
};

export default AddCategoryModal;
