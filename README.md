# sequelize
# FOSAN TODO


Kita akan coba membuat sebuah aplikasi simulasi aplikasi todo list.

**Notes**

- Wajib menggunakan port **3000**
- masukkan node_modules pada .gitignore

---

## Level 0

Buatlah model `User` dengan field field sebagai berikut:

| Field    | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| id       | Integer| Id primary key                   |
| name     | String | Nama dari User                   |
| password | String | Password User                    |
| email    | String | Email dari User                  |

Buatlah model  `Todo` dengan field field sebagai berikut:

| Field     | Type    | Description                                                  |
| --------- | ------- | ------------------------------------------------------------ |
| id        | Serial  | Id primary key                                               |
| kegiatan  | String  | Nama Kegiatan                                                |
| status    | Integer | 0 untuk belum terlaksana, 1 jika sudah terlaksana            |


## Level 1

Ada kesalahan pada requirement awal. Pada model `Todo` seharusnya memiliki atrribute `userId`, tambahkan kolom `userId` ke dalam model `Todo` buatlah sebuah Associatons untuk memperbaiki kesalahan tersebut.


## Level 2

Buatlah sebuah routes seperti perintah dibawah ini

**Informasi routes yang perlu dibuat untuk aplikasi ini adalah:**

| Method | Routes                 | Description                                       |
| ------ | ---------------------- | ------------------------------------------------- |
| POST   | /user/register         | Menambahkan user register                         |
| POST   | /user/login            | Masuk ke dalam aplikasi fosan todo                |
| GET    | /todo                  | Menampilkan semua todo list                       |
| POST   | /todo/                 | Input kegiatan baru                               |
| GET    | /todo/list/:id         | Menampilkan todo id tertentu                      |
| POST   | /todo/edit/:id         | Mengedit data                                     |
| DELETE | /todo/delete/:id       |Menghapus data kegiatan di dalam aplikasi          |

**Route yang dibuat haruslah sama dengan apa yang ditulis disini**

## Level 3

Kalian diminta untuk membuat proses authentication dan authorization! sehingga tidak sembarangan orang bisa masuk ke dalam aplikasi todo


- POST /user/register

  Buatlah route untuk melakukan registrasi `User`, input yang dibutuhkan:

  - email
  - name
  - password, lakukan encryption (**Ingat! database tidak boleh menyimpan plain-password**)

  Jika signup berhasil, beri response `Sign Up, Success!`
  

- POST /user/login

  Buatlah route untuk melakukan pemeriksaan apakah `User` sudah pernah mendaftar sebelumnya. Jika berhasil, berikan response berupa message `Sign In, Success!` 

## Level 4

Saatnya User melakukan kegiatan maka akan terjadi perubahan, gunakan  **authentication** dalam penggunaan endpoint dibawah ini

- POST /todo , POST /todo/edit/:id , DELETE /todo/delete/:id

  Buatlah route yang digunakan untuk menyimpan data - data sesuai attributes todo. Setiap user hanya dapat menambahkan,edit dan delete kegiatan untuk dirinya (tidak dapat menambahkan kegiatan untuk ID user lain)





