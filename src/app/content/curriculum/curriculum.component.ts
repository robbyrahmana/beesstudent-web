import { Component, OnInit, AfterViewInit } from "@angular/core";
import { CommonContentService } from "src/app/common/content/common-content.service";
import { Curriculum } from "src/app/model/curriculum";
import { MatDialog } from "@angular/material";
import { CurriculumAddComponent } from "./curriculum-add/curriculum-add.component";
import { CurriculumRepositoryService } from "src/app/repository/curriculum-repository.service";

@Component({
  selector: "app-curriculum",
  templateUrl: "./curriculum.component.html",
  styleUrls: ["./curriculum.component.scss"]
})
export class CurriculumComponent extends CommonContentService<Curriculum>
  implements AfterViewInit {
  dialogData: Curriculum;
  commonTableDataSource: import("../../common/repository/common-table-data-source-repository").CommonPageableDataSourceRepository<
    Curriculum
  > = this.curriculumRepositoryService;
  displayedColumns = ["select", "code", "name", "description"];

  constructor(
    private curriculumRepositoryService: CurriculumRepositoryService,
    private dialog: MatDialog
  ) {
    super();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  dataClick(row: Curriculum) {
    this.selection.toggle(row);

    if (this.selection.isSelected(row)) {
      this.dialogData = row;
    } else {
      this.dialogData = null;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CurriculumAddComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
