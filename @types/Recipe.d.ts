export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: MissedIngredient[];
  usedIngredients: MissedIngredient[];
  unusedIngredients: any[];
  likes: number;
}

interface MissedIngredient {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta: (string | string)[];
  extendedName?: string;
  image: string;
}
