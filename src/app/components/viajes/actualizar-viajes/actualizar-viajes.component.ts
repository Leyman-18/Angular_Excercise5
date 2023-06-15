import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ViajesI } from 'src/app/models/viajes';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-actualizar-viajes',
  templateUrl: './actualizar-viajes.component.html',
  styleUrls: ['./actualizar-viajes.component.css']
})
export class ActualizarViajesComponent implements OnInit {
  id: number =0;

  form: FormGroup = this.formBuilder.group({
    id: [''],
    numeroPlazas: ['',[Validators.required]],
    idVaijero: ['',[Validators.required]],
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private viajesService: ViajesService,
    private router: Router,
    private messageService: MessageService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getViajero(this.id);
  }

  getViajero(id: number){
    this.viajesService.getOneViajes(id).subscribe({next: (data)=>{
      this.form.setValue(data.viajes)
    }})
  }

  onSubmit(){
    const formValue: ViajesI = this.form.value;
    const id: number = this.form.value.id;
    this.viajesService.updateViajes(id, formValue).subscribe(()=>{
      setTimeout(()=>{
        this.messageService.add({severity: 'success', summary: 'Notificacion',detail: 'Viaje Actualizado', life:5000});
      }, 0);
      this.router.navigateByUrl('viajes');
    },
    err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/viajes');
  }
}
