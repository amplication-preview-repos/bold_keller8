import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
