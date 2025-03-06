import React from 'react';
import Search from '../components/Search';

export const Collection = () => {
  return (
    <div>
      <div>
        {/* FILTERS */}
        <div>
          <Search />
          <div>
            <h5>Categories</h5>
            <div>
              {["Headphones", "Earbuds", "Speakers", "Accessories"].map((cat) => (
                <label key={cat} className="flex">
                  <input type="checkbox" id={cat} name="category" value={cat} />
                  {cat}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
