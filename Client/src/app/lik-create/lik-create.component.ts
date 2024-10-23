import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LikoviService } from '../_services/likovi.service';

@Component({
  selector: 'app-lik-create',
  templateUrl: './lik-create.component.html',
  styleUrls: ['./lik-create.component.css']
})
export class LikCreateComponent {

  lik = {
    id: '',
    ime: '',
    nazivCrtica: '',
    opis: ''
  }

  constructor(private likoviService: LikoviService, private toastr: ToastrService){}

  ngOnInit(): void {
    
  }



  spremi(){

    this.likoviService.spremiNovog(this.lik).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Lik spremljen");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

}
