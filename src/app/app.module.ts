import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
/*import { HttpClientModule } from '@angular/common/http';*/


@NgModule({

  declarations: [
    AppComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /*HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
