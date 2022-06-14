import React, { useState } from "react";

function CategoryFilter({ categories, getCategory }) {
  const [isActive, setIsActive] = useState(false)

  console.log(isActive)

  // const handleClass = (e) => {
  //   setIsActive(isActive => !isActive)
  // }

  const toggleClass = () => {   
    setIsActive(isActive => !isActive)
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return  <button key={category} className={isActive ? "selected" : ""} name={category} onClick={() => {
        getCategory(category)
        toggleClass()}}
        >{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
