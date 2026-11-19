# infa.store (Laravel) - Tahap 1

Folder ini berisi file tambahan untuk proyek Laravel baru. Salin (merge) ke dalam proyek Anda.

## Langkah
1. Pasang PHP 8.2+ dan Composer. Di Windows paling mudah pakai Laragon (laragon.org).
2. Buat proyek:   composer create-project laravel/laravel infa-store
3. Masuk folder:  cd infa-store
4. Pasang API:    php artisan install:api   (jawab yes jika ditanya migrasi)
5. Salin semua isi folder ini ke proyek (app, config, database, public, resources, routes), timpa jika ditanya.
6. Buat tabel dan isi data: php artisan migrate:fresh --seed
7. Jalankan:      php artisan serve
8. Buka http://127.0.0.1:8000 (toko) dan http://127.0.0.1:8000/api/products (API).

Nomor WhatsApp: tambahkan WA_NUMBER=62812xxxxxxx di file .env.
Foto produk: taruh di public/images dengan nama sesuai kolom image, mis. images/calle-tee-gang-sempit.jpg.

## Endpoint Tahap 1
GET /api/products?brand=&category=&q=&sort=price_asc|price_desc|name|newest
GET /api/products/{slug}
GET /api/brands
GET /api/categories
