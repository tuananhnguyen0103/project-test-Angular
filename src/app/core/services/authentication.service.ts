import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError,  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginUser } from '../domain/login.user';
import { SystemConstants } from '../common/System.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  /*
    httpOptions chứa các thông tin của request mà gửi lên api

    Đọc thêm phần http protocol
  */ 
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    }),
  }

  Login(userName:string, password:string): Observable<LoginUser> {
    let data = {
      email: userName,
      password : password
    }
    return this.http.post<LoginUser>(`${SystemConstants.BASE_API}/api/user/login`, data, this.httpOptions).pipe(
      // Tự động bắt lỗi
      // Có lỗi sẽ chạy vào hàm handleError
      // catchError return ra mã lỗi
      catchError(this.handleError),

      // Pass qua thì sẽ chạy vào thằng tap
      // Tap xử lý dữ liệu
      tap((res:any)=>{
        localStorage.setItem(SystemConstants.CURRENT_USER,JSON.stringify(res))
      })
    );
  }

  Logout(){
    localStorage.removeItem(SystemConstants.CURRENT_USER)
  }
  
  handleError(error: HttpErrorResponse) {
    let strMsg = "";
    if (error.error instanceof ErrorEvent) {
      strMsg = 'An error occurred: ' + error.error.message
      console.log('An error occurred: ' + error.error.message)
    }
    else {
      strMsg = 'Back end return code: ' + error.status + '; body was: ' + JSON.stringify(error.error)
      console.log('Back end return code: ' + error.status + '; body was: ' + JSON.stringify(error.error))
    }
    return throwError(strMsg)
  }
}
/*
  file này là để xác thực người dùng
*/