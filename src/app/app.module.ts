import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatTooltipModule, MatGridListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatSelectModule, MatRadioModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { MainComponent } from './template/main/main.component';
import { CurriculumComponent } from './content/curriculum/curriculum.component';
import { CurriculumAddComponent } from './content/curriculum/curriculum-add/curriculum-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CurriculumComponent,
    CurriculumAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgMaterialMultilevelMenuModule,
    MatMenuModule,
    MatTooltipModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MalihuScrollbarModule.forRoot()
  ],
  entryComponents: [
    CurriculumAddComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
