import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/model/device.model';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private service: DeviceService) { }

  public devices: Device[] =[]

  ngOnInit(): void {
    this.getDevices();
  }

  public getDevices(): void {
    this.service.findAllUsingGet().subscribe(data => {
      this.devices = data;

      console.log(this.devices);
    });
  }

  public onDelete(id: number): void {
    this.service.DeleteByIdUsingDelete(id.toString()).subscribe( 
      () => this.getDevices(), 
      (error)=>{console.log("error", error)},
      ()=>{console.log("fim delete")}
    );
  }

}
