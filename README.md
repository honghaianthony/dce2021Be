# Backend Documentation 

Quy định và quy trình làm việc với Backend

## Quy định 

- Khi bắt đầu làm một tính năng mới cần checkout branch mới từ branch local với tên của mình hoặc tên phù hợp với tính năng.

    Ví dụ: khuong-duy-login.

    `git checkout local`

    `git checkout -b <branch name>`

- Sau khi code xong api thì cần viết docs swagger ngay lập tức để tránh tình trạng sau khi code xong lại quên viết docs.

- Sau khi hoàn thành code thì đặt tên commit một cách ngắn gọn dễ hiểu bằng tiếng anh.

- Nếu thấy tính năng mình làm đã xong thì báo cáo với leader để tiến hành họp và test tính năng sau đó merge code vào branch chính.

## Cấu trúc thư mục 

1. /config

    - Thư mục chứa các file config cho server, database, ...

2. /docs

    - Thư mục chứa docs swasgger.

3. /src

    - Thư mục này quan trọng, chứa toàn bộ api của project.
    - /routes thư mục này dùng để định nghĩa các route.
    - /models thư mục này dùng để định nghĩa các model.
    - /controllers thư mục này chứa các controller của model thao tác xử lý logic chủ yếu nằm ở đây.
    - /public đây là thư mục chứa các file tĩnh như hình ảnh, văn bản, ...
    - /util thư mục này chứa các file để dùng chung cho nhiều api khác nhau.

## Cách chạy source code

1. Những thứ cần cài đặt trước: 

    - Git Bash
    - Microsoft SQL Server
    - Nodejs
2. Tiến hành chạy source 
    
    - Clone git repository 

        Mở terminal tại thư mục muốn đặt source code

        `git clone https://gitlab.com/khuongduy172/nmcnpm_be.git`

    - Tạo database trong SQL Server

        `CREATE DATABASE <>`

    - Chạy code

        Tiếp tục ở terminal vừa clone git repository về

        `cd nmcnpm_be/`

        `npm i`

        `npm run dev`
    
    - Lưu ý luôn phải kiểm tra xem phiên bản mới nhất của file .env trong project của mình, nếu có cập nhật .env phải báo cho leader và gửi nội dung cho leader.

## Đối với team Frontend 

- Nếu gặp lỗi khi chạy source code thì lập tức liên hệ với thành viên team Backend để tiến hành sửa lỗi (đừng thường xuyên quá nha) 
- Khi Frontend bắt đầu làm việc hãy start server Backend lên trước rồi vào https://localhost:3000/docs để có thể xem được docs swagger và test api để gắn api vào Frontend.
- Chạy source Frontend ở port 3001.
