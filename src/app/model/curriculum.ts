import { Pageable } from "../common/model/Pageable";

export interface Curriculum extends Pageable<Curriculum> {
  id: string;
  code: string;
  name: string;
  description: string;
  createdDate: string;
  createdBy: string;
  lastModifiedDate: string;
  lastModifiedBy: string;
  version: number;
  deleted: boolean;
}
