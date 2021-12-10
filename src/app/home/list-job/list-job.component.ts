import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/model/job.model';
import { listJobService } from 'src/app/services/list-job.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  jobs!: Jobs[];


  constructor(private listJobService: listJobService) { }

  ngOnInit(): void {
    this.listJobService.getAllJob().then(data => this.jobs = data);

  }

}
