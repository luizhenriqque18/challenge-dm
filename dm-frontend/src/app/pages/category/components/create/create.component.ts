import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryDto } from '../../services/category.dto';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private service: CategoryService,
    private fb: FormBuilder,
    private router: Router) { }

  public categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(128)]]
  })
  public categories: Category[] = [];

  ngOnInit(): void {
    this.service.findAllUsingGet()
      .subscribe(data => {
        this.categories = data;
      })
  }

  onSubmit(): void {
    let dto: CategoryDto = this.categoryForm.value;

    this.service.CreateUsingPost(dto).subscribe(() => {
      this.router.navigate(['category']);
      this.categoryForm.reset();
    })
  }

}
