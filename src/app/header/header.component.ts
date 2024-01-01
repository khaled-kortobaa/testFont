import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule,CommonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  newClass!: string;
  constructor(private share: SharedDataService) {}
  ngOnInit(): void {
    this.share.classSharedObs.subscribe((data:any) => {
      this.newClass = data;
    });
  }
}
