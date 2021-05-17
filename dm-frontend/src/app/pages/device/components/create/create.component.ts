import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category.model';
import { Device } from 'src/app/model/device.model';
import { CategoryService } from 'src/app/pages/category/services/category.service';
import { DeviceDto } from '../../services/device.dto';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private service: DeviceService,
    private serviceCategory: CategoryService, 
    private fb: FormBuilder) { }

  public deviceForm = this.fb.group({
      color: ['', [Validators.required, Validators.maxLength(16)]],
      partNumber: [null, Validators.required],
      categoryId: [null, Validators.required],
  })
  public categories: Category[] = [];

  ngOnInit(): void {

    console.log(this.deviceForm);
    this.serviceCategory.findAllUsingGet()
    .subscribe(data => {
      this.categories = data;
    })
  }

  onSubmit(): void {
    let dto: DeviceDto = this.deviceForm.value;

    console.log(this.deviceForm);

    this.service.CreateUsingPost(dto).subscribe(() => {
    })
  }

}
