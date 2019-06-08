import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-common-dialog-content",
  templateUrl: "./common-dialog-content.component.html",
  styleUrls: ["./common-dialog-content.component.scss"]
})
export class CommonDialogContentComponent implements OnInit {
  @Input() click: any;
  @Input() dialogData: any;

  constructor() {}

  ngOnInit() {}
}
