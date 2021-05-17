import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private service: CategoryService) { }

  public categories: Category[] =[]


  ngOnInit(): void {
    this.getCategory();
  }

  public getCategory(): void {
    this.service.findAllUsingGet().subscribe(data => {
      this.categories = data;

      console.log(this.categories);
    });
  }

  public onDelete(id: number): void {
    this.service.DeleteByIdUsingDelete(id.toString()).subscribe( 
      () => this.getCategory(), 
      (error)=>{console.log("error", error)},
      ()=>{console.log("fim delete")}
    );
  }
}
