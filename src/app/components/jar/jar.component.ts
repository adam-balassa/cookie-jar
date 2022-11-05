import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-jar',
  templateUrl: './jar.component.html',
  styleUrls: ['./jar.component.css']
})
export class JarComponent implements OnInit {

  name: string;
  get cols() {
    return this.name.length || 4;
  }

  constructor(private nameService: NameService) {
    this.name = this.nameService.name.value;
  }

  ngOnInit(): void {
  }

  updateName(newName: string){
    this.name = newName;
    this.nameService.name.next(newName);
  }

}
