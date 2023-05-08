import React, { useState } from "react";
import { MainFiltersWrapper, FilterWrapper } from "./styles";
import FilterCard from "../Filter";
import { category, contents, prices, supports, amount } from "./data";

const Filters = () => {
  const [cate, setCate] = useState(category);
  const [cont, setCont] = useState(contents);

  return (
    <MainFiltersWrapper>
      <FilterWrapper>
        {cate.map(({ options }, key) => (
          <FilterCard
            key={key}
            title="Category"
            options={options}
            isClickable={false}
          />
        ))}
        {cont.map(({ options }, key) => (
          <FilterCard key={key} title="Contents" options={options} />
        ))}
        {prices.map(({ options }, key) => (
          <FilterCard key={key} title="Price" options={options} />
        ))}
        {amount.map(({ options }, key) => (
          <FilterCard key={key} title="Polygon amount" options={options} />
        ))}
        {supports.map(({ options }, key) => (
          <FilterCard key={key} title="Auto upload support" options={options} />
        ))}
      </FilterWrapper>
    </MainFiltersWrapper>
  );
};

export default Filters;
