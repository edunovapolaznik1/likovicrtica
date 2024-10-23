import { Component, OnInit } from '@angular/core';
import { Lik } from '../_modeli/likovi';
import { ToastrService } from 'ngx-toastr';
import { LikoviService } from '../_services/likovi.service';

@Component({
  selector: 'app-likovi',
  templateUrl: './likovi.component.html',
  styleUrls: ['./likovi.component.css']
})
export class LikoviComponent implements OnInit{

  likovi: Lik[] = [];

  constructor(private likoviService: LikoviService, private toastrService: ToastrService
  ){}

  ngOnInit(): void {
    this.dohvatiLikove();
  }

  dohvatiLikove(){
    this.likovi = [];
    this.likoviService.dohvatiSve().subscribe({
      next: success => {
        console.log(success);
        const likoviData = success["$values"];

        likoviData.forEach((likItem: any) => {
          const lik: Lik = {
            id: likItem.id,
            ime: likItem.ime,
            nazivCrtica: likItem.nazivCrtica,
            opis: likItem.opis
          }

          this.likovi.push(lik);
          console.log("likovi", this.likovi);
        });
      },
      error: error => {
        console.error(error);
      }
    })
  }


  obrisi(id: number){
    this.likoviService.obrisi(id).subscribe({
      next: success => {
        this.toastrService.success("Lik obrisan");
        this.dohvatiLikove();
      },
      error: error => {
        console.error(error);
        this.toastrService.error("Dogodila se greška");
      }
    })
  }

 
}
