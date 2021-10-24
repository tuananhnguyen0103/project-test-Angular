
/*
    File này là key để mình lưu thông tin của user đăng nhập vào tên biến. Lưu vào local store thì sẽ
    Lưu vào trong key current user
    Còn base_api là cái domain để chạy
    Khi up lên host thì sẽ đổi thành cái domain sẽ up lên
*/
export class SystemConstants{
    public static  CURRENT_USER = "CURRENT_USER"
    public static  BASE_API = "https://localhost:44386"
}
