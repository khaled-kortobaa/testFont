import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-font-test',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatSelectModule],
  templateUrl: './font-test.component.html',
  styleUrls: ['./font-test.component.scss']
})
export class FontTestComponent {
  constructor(private share:SharedDataService){}
  selected = 'font1';
  send(){
    this.share.classShared.next(this.selected)
  }
}
