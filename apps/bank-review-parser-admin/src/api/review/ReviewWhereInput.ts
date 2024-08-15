import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReviewWhereInput = {
  id?: StringFilter;
  score?: IntNullableFilter;
  text?: StringNullableFilter;
};
