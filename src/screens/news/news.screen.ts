import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { AuthService } from "src/services/auth.service";

@Component({
  selector: '<app-news>',
  templateUrl: './news.screen.html',
  styleUrls: ['./news.screen.scss']
})

export class NewsComponent implements OnInit {
  news:any;
  articles:any;

  constructor(
    private http: HttpClient,
    private authSrv: AuthService,
    private router: Router
  ){}

  ngOnInit() {
    this.http.get('https://newsapi.org/v2/everything?q=Apple&from=2021-06-08&sortBy=popularity&apiKey='+environment.newsApi)
    .toPromise().then((res) => {
      this.news = res;
      this.articles = this.divideNews(this.news.articles);
      console.log(this.articles);
    }).catch((err) => {
      console.log(err);
    });
  }

  divideNews(news:any) {
    let returnArray = [];
    for(let i = 0; i < 6; i++){
      returnArray.push([news[i*3], news[i*3+1], news[i*3+2]])
    }
    return returnArray;
  }

  seeNews(url:any){
    window.open(url)
  }

  logout() {
    this.authSrv.logOut().then(() => {
      localStorage.removeItem('userId');
      localStorage.removeItem('permissions');
      this.router.navigate(['login']).then(() => {});
    });
  }
}   