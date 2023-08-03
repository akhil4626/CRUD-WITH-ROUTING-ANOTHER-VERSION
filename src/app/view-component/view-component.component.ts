import { Component } from '@angular/core';
import { DbdataService } from '../dbdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent {
  constructor(private dbdata: DbdataService, private router:Router) {}
  dataFromDatabase =false;
  disabled =true
  database:any;
  formHeader="Add Record to The DB";
  names: string = '';
  email: string = '';
  id: any = null;
  PhoneNumber: any = null;
  Address: string = '';
  showForm = false
  ngOnInit() {
    this. gettingDataFromDb();
  }


  gettingDataFromDb(){
    this.dbdata.getDataFromDb().subscribe({
      next: (data:any) => {
        this.database=data;
        this.dataFromDatabase=true
      },
      error: (error:any) => {
        // Handle any errors that occur during the HTTP request
        console.error('Error:', error);
      },
      
    });
  
}
openForm(data: any = null) {
  this.router.navigate(['/update'], { queryParams: data }); // Use router to navigate to 'update' route with query parameters
}
}
