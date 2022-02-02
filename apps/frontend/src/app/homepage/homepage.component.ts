import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-example-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  user: any = [];
  newName = '';
  newJob = '';

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/')
      .subscribe((data) => {
        this.user = data;
        console.log(data);
      });
  }

  adduser() {
    this.http
      .post('https://reqres.in/api/users', {
        name: this.newName,
        job: this.newJob,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
