import { Component, Output, EventEmitter } from '@angular/core';
import { DbdataService } from 'src/app/dbdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {
  constructor(private dbdata: DbdataService, private router: Router) {}

  @Output() dataUpdated = new EventEmitter<void>(); // Define the output event
  showForm = false;

  dataFromDatabase = false;
  disabled = true;
  database: any;
  names: string = '';
  email: string = '';
  id: any = null;
  PhoneNumber: any = null;
  Address: string = '';

  ngOnInit() {}

  navigateToNavigationComponent() {
    this.router.navigate(['/']); // Use the router to navigate to the 'NavigationComponentComponent'
  }

  createDatainDb() {
    console.log('Data to be sent to the server:', this.names, this.email, this.PhoneNumber, this.Address);

    this.dbdata.createDataInDb(this.names, this.email, this.PhoneNumber, this.Address).subscribe({
      next: (data) => {
        // Emit the event to notify the parent component that data is updated
        this.dataUpdated.emit();
        this.router.navigate(['/']);

        console.log('Response Data:', data);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  closeForm() {
    this.showForm = false;

    this.clearForm();

    // Navigate to the home page when the "Cancel" button is clicked
    this.router.navigate(['/']);
  }

  clearForm() {
    this.id = null;
    this.names = '';
    this.email = '';
    this.PhoneNumber = null;
    this.Address = '';
  }
}




// import { Component, Output, EventEmitter  } from '@angular/core';
// import { DbdataService } from 'src/app/dbdata.service';
// import { Router } from '@angular/router'; 
// @Component({
//   selector: 'app-add-component',
//   templateUrl: './add-component.component.html',
//   styleUrls: ['./add-component.component.css']
// })
// export class AddComponentComponent {
//   constructor(private dbdata: DbdataService, private router: Router) {}

//   @Output() dataUpdated = new EventEmitter<void>(); // Define the output event
//   showForm = false

//   dataFromDatabase = false;
//   disabled = true;
//   database: any;
//   names: string = '';
//   email: string = '';
//   id: any = null;
//   PhoneNumber: any = null;
//   Address: string = '';

//   ngOnInit() {}
//   navigateToNavigationComponent() {
//     this.router.navigate(['/']); // Use the router to navigate to the 'NavigationComponentComponent'
//   }
//   createDatainDb() {
//     console.log('Data to be sent to the server:', this.names, this.email, this.PhoneNumber, this.Address);

//     this.dbdata.createDataInDb(this.names, this.email, this.PhoneNumber, this.Address).subscribe({
//       next: (data) => {
//         // Emit the event to notify the parent component that data is updated
//         this.dataUpdated.emit();
//         this.router.navigate(['/']);

//         console.log('Response Data:', data);
//       },
//       error: (error) => {
//         console.error('Error:', error);
//       },
//     });
//   }

//   closeForm() {
//     this.showForm = false;

//     this.clearForm();
//   }

//   clearForm() {
//     this.id = null;
//     this.names = '';
//     this.email = '';
//     this.PhoneNumber = null;
//     this.Address = '';
//   }
// }


