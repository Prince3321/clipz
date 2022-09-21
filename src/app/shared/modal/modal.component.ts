import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  //providers: [ModalService] -- injecting the  service at component level
})
export class ModalComponent implements OnInit {

  @Input() modalID: string = ''

  constructor(public modal: ModalService, public el: ElementRef) {
    console.log(this.modal.visible);
    console.log(this.el)
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  closeModal(event: Event) {
    event.preventDefault()
    this.modal.toggleModal(this.modalID)
  }

}
