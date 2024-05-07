import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./leftSide.css";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h6>Categories</h6>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link className="menu-list" to={`/category/${category.id}`}>
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
