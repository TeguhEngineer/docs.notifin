# Integrasi

Panduan ini menjelaskan langkah-langkah untuk menggunakan menu **Integrasi** di aplikasi **Notifin**.

---

## Masuk ke Menu Integrasi

![Tampilan halaman Integrasi API di aplikasi Notifin. Sidebar kiri menampilkan menu navigasi seperti Dashboard, Perangkat, Kontak, Kirim Pesan, Pesan, dan Integrasi. Bagian utama menampilkan tabel daftar API Key dengan kolom Nama, API Key, Secret Key, Total Hit, dan Aksi.](../static/img/integrasi/menuu.png)

- Di *sidebar* sebelah kiri, pilih menu **Integrasi**.  
- Halaman ini digunakan untuk mengelola **kunci API (API Key)**, yaitu kode unik yang berfungsi menghubungkan aplikasi **Notifin** dengan aplikasi lain secara otomatis dan aman.

---

## Daftar API Key

Pada halaman ini dapat dilihat daftar API Key yang sudah dibuat, meliputi:

![Tampilan halaman Daftar API Key di aplikasi Notifin. Sebuah jendela pop-up muncul menampilkan kolom Nama API Key yang dapat diperbarui, serta tombol Simpan dan Batal di bagian bawah. Di latar belakang masih terlihat tabel daftar API Key yang ada.](../static/img/integrasi/daftar-api.png)

- **No** → nomor urut data API Key.  
- **Nama** → nama identifikasi dari API Key.   
- **API Key** → kode unik utama yang digunakan sebagai kunci akses sistem.  
- **Secret Key** → kunci rahasia tambahan untuk keamanan.  
- **Total Hit** → jumlah permintaan (request) yang telah dilakukan menggunakan API tersebut.  
- **Terakhir Digunakan** → waktu terakhir API Key tersebut digunakan.  
- **Aksi** → digunakan untuk mengedit atau menghapus API Key.

---

## Menambahkan API Key Baru

![Tampilan tombol Tambah API Key di pojok kanan atas halaman Integrasi API di aplikasi Notifin.](../static/img/integrasi/tambah.png)

- Klik tombol **Tambah API Key** di pojok kanan atas.  
- Isi nama untuk API Key baru, lalu simpan.  

![Tampilan halaman Tambah API Key di aplikasi Notifin. Sebuah jendela pop-up muncul menampilkan kolom Nama API Key yang dapat diperbarui, serta tombol Simpan dan Batal di bagian bawah. Di latar belakang masih terlihat tabel daftar API Key yang ada.](../static/img/integrasi/form-tambah.png)

- Setelah disimpan, sistem akan otomatis membuat **API Key** dan **Secret Key** baru yang bisa digunakan untuk menghubungkan aplikasi lain dengan **Notifin**.



---

## Mengedit API Key

![Tampilan tombol Edit API Key di kolom Aksi pada tabel daftar API Key. Pada tabel terlihat beberapa baris data API dengan kolom Nama, API Key, Secret Key, Total Hit, dan Aksi di sisi kanan. Tombol Edit berbentuk ikon pensil berwarna biru yang berfungsi untuk membuka jendela pengeditan data API Key.](../static/img/integrasi/edit.png)

- Klik ikon **Edit** pada kolom **Aksi** di baris API Key yang ingin diperbarui.

![Tampilan halaman Edit API Key di aplikasi Notifin. Sebuah jendela pop-up muncul menampilkan kolom Nama API Key yang dapat diperbarui, serta tombol Simpan dan Batal di bagian bawah. Di latar belakang masih terlihat tabel daftar API Key yang ada.](../static/img/integrasi/form-edit.png)

- Lakukan perubahan pada kolom **Nama** atau pengaturan lain yang tersedia.  
- Tekan tombol **Simpan** untuk menyimpan perubahan.  

![Tampilan notifikasi berhasil memperbarui API Key di aplikasi Notifin. Sebuah pesan konfirmasi berwarna hijau muncul di bagian atas layar dengan tulisan “Berhasil memperbarui API Key” menandakan proses pembaruan telah selesai.](../static/img/integrasi/berhasil.png)

- Setelah disimpan, data API Key akan diperbarui tanpa mengubah kode **API Key** maupun **Secret Key** yang sudah ada.

---

## Menghapus API Key

![Tampilan tombol Hapus API Key di kolom Aksi pada tabel daftar API Key. Pada tabel terdapat ikon tempat sampah berwarna merah di sisi kanan yang berfungsi untuk menghapus data API Key secara permanen dari sistem.](../static/img/integrasi/hapus.png)

- Klik ikon **Hapus** pada kolom **Aksi** di baris API Key yang ingin dihapus.  

![Tampilan jendela konfirmasi penghapusan API Key di aplikasi Notifin. Sebuah jendela peringatan muncul di tengah layar berisi pesan “Apakah yakin ingin menghapus API Key ini?” dengan dua tombol di bawahnya yaitu Batal berwarna abu-abu dan Ya, Hapus berwarna merah.](../static/img/integrasi/konfirmasi.png)

- Akan muncul jendela konfirmasi penghapusan.  
- Tekan **Ya, Hapus** untuk menghapus API Key secara permanen.  

![Tampilan notifikasi berhasil menghapus API Key di aplikasi Notifin. Sebuah pesan berwarna hijau muncul di bagian atas layar dengan tulisan “API Key berhasil dihapus” yang menandakan proses penghapusan sudah selesai.](../static/img/integrasi/berhasil-hapus.png)

- Setelah dihapus, koneksi aplikasi lain yang menggunakan kunci tersebut akan otomatis berhenti.

---

## Tampilkan Data

![Tampilan opsi jumlah data di tabel Daftar API Key.](../static/img/integrasi/tampilan-data.png)

Fitur **Tampilkan Data** memungkinkan pengguna menentukan jumlah baris yang ditampilkan pada tabel integrasi.

Pilihan yang tersedia:

> - 10 data per halaman  
> - 25 data per halaman  
> - 50 data per halaman  
> - 100 data per halaman  

> Fitur ini membantu menyesuaikan tampilan agar lebih nyaman saat melihat daftar API Key dalam jumlah besar.

---

## Cari API Key

![Tampilan fitur pencarian pada halaman daftar API Key di aplikasi Notifin, menyorot kolom input bertuliskan "Ketik untuk mencari..." yang digunakan untuk mencari API Key berdasarkan nama, nomor, atau API Key.](../static/img/integrasi/cari.png)

Kolom **Cari** berfungsi untuk menemukan API Key tertentu secara cepat tanpa harus menggulir daftar.

Pengguna dapat mencari berdasarkan:

> - Nama tujuan  
> - API Key  
> - Secret Key  

> Cukup ketik kata kunci di kolom pencarian, sistem akan otomatis menampilkan hasil yang sesuai.

---


## Catatan

> - Simpan **API Key** dan **Secret Key** dengan aman, jangan dibagikan ke pihak lain.  
> - API Key berfungsi seperti **kunci akses** untuk sistem lain agar dapat berkomunikasi dengan aplikasi Notifin.  
> - Jika kunci ini terhapus atau diubah, koneksi ke aplikasi lain akan berhenti.

---

✅ **Selesai!** Panduan penggunaan menu **Integrasi API** di aplikasi **Notifin** telah berhasil dipahami 🎉
