import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LikoviService } from '../_services/likovi.service';

@Component({
  selector: 'app-lik',
  templateUrl: './lik.component.html',
  styleUrls: ['./lik.component.css']
})
export class LikComponent implements OnInit {

  likID: string = '';
  lik: any = {
    id: '',
    ime: '',
    nazivCrtica: '',
    opis: ''
  }

  constructor(private route: ActivatedRoute, private likoviService: LikoviService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.likID = params['id'];
      this.dohvatiLikPoId();
    });
  }

  dohvatiLikPoId(){
    this.likoviService.dohvatiPoId(this.likID).subscribe({
      next: response => {
        console.log(response);
        console.log(response.ime);
        


        this.lik = {
          id: response.id,
          ime: response.ime,
          nazivCrtica: response.nazivCrtica,
          opis: response.opis
        }
        console.log(this.lik);
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

  uredi(){
    this.lik.id = this.likID;

    this.likoviService.azuriraj(this.lik).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Spremljeni podaci lika.");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }


}
