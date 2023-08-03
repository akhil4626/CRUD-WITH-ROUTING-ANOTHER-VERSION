import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute to access query parameters
import { DbdataService } from 'src/app/dbdata.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {
  id: any;
  names: string = '';
  email: string = '';
  PhoneNumber: any;
  Address: string = '';
  showForm = false

  constructor(private dbdata: DbdataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Access the query parameters in the ngOnInit lifecycle hook
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.names = params['names'];
      this.email = params['email'];
      this.PhoneNumber = params['PhoneNumber'];
      this.Address = params['Address'];
    });
  }

  updateDataTODb() {
    console.log('Data to be sent to the server:', this.names, this.email, this.PhoneNumber, this.Address);

    this.dbdata.updateDataInDb(this.id, this.names, this.email, this.PhoneNumber, this.Address).subscribe({
      next: (data) => {
        this.router.navigate(['/']); // Redirect to the root route after successful update
        console.log('Response Data:', data);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  closeForm() {
    this.showForm=false;

    this.router.navigate(['/']); // Redirect to the root route after successful update

    this.clearForm();
  }

  clearForm() {
    this.id = null;
    this.names = '';
    this.email = '';
    this.PhoneNumber = null;
    this.Address = '';
  }
}





// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute to access query parameters
// import { DbdataService } from 'src/app/dbdata.service';
// Router
// @Component({
//   selector: 'app-update-component',
//   templateUrl: './update-component.component.html',
//   styleUrls: ['./update-component.component.css']
// })
// export class UpdateComponentComponent implements OnInit {
//   id: any;
//   names: string ='';
//   email: string='';
//   PhoneNumber: any;
//   Address: string='';

//   constructor(private dbdata: DbdataService, private route: ActivatedRoute, private router:Router) {} // Inject ActivatedRoute

//   ngOnInit() {}
//   openForm(data:any){
//     // Access the query parameters in the ngOnInit lifecycle hook
//     this.route.queryParams.subscribe((params) => {
//       this.id = params['id'];
//       this.names = params['names'];
//       this.email = params['email'];
//       this.PhoneNumber = params['PhoneNumber'];
//       this.Address = params['Address'];
//     });
//     this.dbdata.updateDataInDb( this.id, this.names, this.email, this.PhoneNumber, this.Address ).subscribe({
//       next: (data) => {
//         this.router.navigate(['/']);

//         console.log('Response Data:', data);
  
//       },
//       error: (error) => {
//         // Handle any errors that occur during the HTTP request
//         console.error('Error:', error);
//       },
      
//     });
  
  
  
  
  
//   }






//   closeForm(){
//     this.clearForm()
//   }

//   clearForm() {
//     this.id =null ;
//     this.names ='';
//     this.email = '';
//     this.PhoneNumber =null ;
//     this.Address = '';
//   }
// }
