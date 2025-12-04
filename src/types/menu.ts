export type category = {
  id: string;
  name: string;
  subcategories: Sybcategory[];
};

export type Sybcategory = {
  id: string;
  name: string;
};

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  preparation: string;
  image: string;
  subCategoryId: string;
};
