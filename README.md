# Lễ Thành Hôn — Annie & Dũng

Thiệp mời online cho lễ thành hôn của **Nguyễn Thị Thanh Tuyền (Annie)** và
**Nguyễn Trí Dũng** — Chủ Nhật 17.01.2027.

Built with Next.js 15 (App Router), React 19, Tailwind CSS 4 and Framer Motion.
The artwork and copy come from the couple's Canva design; the page layout
follows the dark-floral wedding-website style.

## Chạy trên máy (local)

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Cấu trúc

```
src/
  app/
    page.tsx              # ghép các section lại
    layout.tsx            # metadata, fonts
    globals.css           # bảng màu + typography tokens
    api/rsvp/route.ts     # nhận phản hồi RSVP
    admin/                # trang quản lý danh sách khách
  components/
    Hero.tsx              # ảnh hoa nền + tên cô dâu chú rể
    Welcome.tsx           # ảnh polaroid + lời nhắn
    InvitationCard.tsx    # phong bì + khung ren
    TheDay.tsx            # timeline chương trình
    DetailsCard.tsx       # thiệp kem: địa điểm, ngày giờ
    Rsvp.tsx              # form phản hồi
    TimelineIcons.tsx     # icon nét mảnh cho timeline
  lib/
    invitation-data.ts    # ⭐ toàn bộ chữ trên trang nằm ở đây
    rsvp-store.ts         # lưu RSVP (Postgres hoặc file JSON)
```

### Sửa nội dung

Mọi dòng chữ đều nằm trong `src/lib/invitation-data.ts`. Sửa file đó là xong,
không cần đụng tới component.

**Cần thay trước khi gửi cho khách:** mục `timeline` hiện đang là giờ giấc mẫu
(`07:00 đón dâu`, `09:00 lễ thành hôn`, …). Đổi lại theo chương trình thật.
Trường `icon` chọn một trong: `car`, `rings`, `camera`, `cake`, `cheers`,
`tea`, `heart`.

### Đổi ảnh

Thay file trong `public/assets/`:

| File                  | Dùng ở đâu                       |
| --------------------- | -------------------------------- |
| `floral.jpg`          | ảnh nền hero và dải RSVP         |
| `couple-polaroid.png` | ảnh polaroid ở phần lời nhắn     |
| `envelope-open.png`   | phong bì                         |
| `lace-oval.png`       | khung ren hình bầu dục           |
| `geese.png`           | hình minh hoạ đôi ngỗng          |
| `music.mp3`           | nhạc nền (nút bật/tắt góc phải)  |

## Quản lý RSVP

Khách gửi phản hồi ở phần RSVP cuối trang. Xem danh sách tại **`/admin`**:

- số lượng phản hồi, số người sẽ đến / không đến, tổng số khách
- lọc theo "Sẽ đến" / "Không đến"
- lời chúc và số điện thoại của từng khách
- nút **Tải CSV** để mở bằng Excel
- tự làm mới mỗi 30 giây

Mật khẩu lấy từ biến môi trường `ADMIN_PASSWORD`. Nếu chưa đặt thì mặc định là
`annie-dung-2027` — **nhớ đổi trước khi gửi link cho khách**.

### Nơi lưu dữ liệu

`src/lib/rsvp-store.ts` tự chọn nơi lưu:

- **Có `DATABASE_URL`** → lưu vào Postgres (bảng `rsvp` được tạo tự động).
- **Không có** → lưu vào file `.data/rsvp.json` trong thư mục dự án.

File JSON tiện khi chạy local, nhưng trên hosting thì file có thể bị xoá mỗi
lần deploy lại. Khi đưa lên mạng thật, hãy dùng Postgres.

## Đưa lên mạng (Railway)

1. Đẩy code lên GitHub.
2. Tạo project mới trên Railway từ repo đó — Railway tự nhận đây là Next.js.
3. Bấm **New → Database → Postgres**. Railway sẽ tự thêm `DATABASE_URL`.
4. Thêm biến `ADMIN_PASSWORD` trong tab Variables.
5. Deploy.

Xem `.env.example` để biết các biến cần thiết.
