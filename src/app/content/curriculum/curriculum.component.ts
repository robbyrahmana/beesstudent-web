import { Component, OnInit } from '@angular/core';
import { CommonContentService } from 'src/app/common/content/common-content.service';
import { Curriculum } from 'src/app/model/curriculum';
import { MatDialog } from '@angular/material';
import { CurriculumAddComponent } from './curriculum-add/curriculum-add.component';
import { CurriculumService } from 'src/app/service/curriculum.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent extends CommonContentService<Curriculum> implements OnInit {
  
  data: Curriculum;

  commonTableDataSource: import("../../common/service/common-table-data-source").CommonTableDataSource = this.curriculumService;
  
  displayedColumns: ["select", "code", "name", "description"];
  
  dataClick(row: Curriculum) {
    this.selection.toggle(row);

    if (this.selection.isSelected(row)) {
      this.data = row;
    } else {
      this.data = null;
    }
  }

  constructor(private curriculumService: CurriculumService, private dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
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
