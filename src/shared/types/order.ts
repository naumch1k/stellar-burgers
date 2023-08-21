import { IIngredient } from "./ingredient";

export interface IOrder {
  createdAt: string;
  ingredients: IIngredient[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}
