import { CommonPageableContentService } from "./common-pageable-content.service";
import { SelectionModel } from "@angular/cdk/collections";

export abstract class CommonContentService<
  T
> extends CommonPageableContentService<T> {
  abstract dialogData: T;
  abstract dataClick(row: T): any;

  selection = new SelectionModel<T>(false, []);

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: T): string {
    return `${this.selection.isSelected(row) ? "deselect" : "select"}`;
  }
}
