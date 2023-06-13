import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @ViewChild('menu') menu:ElementRef | undefined;
  
  constructor(private render2:Renderer2) { }

  ngOnInit(): void {
  }
  
  change():void{
    const asMenu= this.menu?.nativeElement;
    asMenu.classList.toggle('hidden');
  }
 
  
}
