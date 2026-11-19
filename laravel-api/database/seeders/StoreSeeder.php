<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class StoreSeeder extends Seeder
{
    // DATA CONTOH. Ganti nama, harga, dan modal dengan data asli toko Anda.
    public function run(): void
    {
        $brands = [
            'CHMB' => 'Brand streetwear lokal asal Indonesia.',
            'Telepati' => 'Brand lokal dengan potongan boxy dan desain grafis.',
            'Calle' => 'Brand lokal bergaya jalanan.',
            'Preface' => 'Brand lokal pilihan.',
            'Crocs' => 'Alas kaki clog.',
            'Converse' => 'Contoh brand sneakers (ganti sesuai stok Anda).',
        ];
        foreach ($brands as $name => $desc) {
            Brand::create(['name' => $name, 'slug' => Str::slug($name), 'description' => $desc]);
        }

        // slug kategori = kunci siluet di frontend
        $cats = [
            'tee' => 'Kaos', 'hoodie' => 'Hoodie', 'jacket' => 'Jaket', 'pants' => 'Celana',
            'cap' => 'Topi', 'beanie' => 'Kupluk', 'tote' => 'Tote bag', 'socks' => 'Kaus kaki',
            'sneakers' => 'Sneakers', 'crocs' => 'Crocs',
        ];
        foreach ($cats as $slug => $name) {
            Category::create(['name' => $name, 'slug' => $slug]);
        }

        $sizes = [
            'clothes' => ['S', 'M', 'L', 'XL'],
            'shoes' => ['39', '40', '41', '42', '43', '44'],
            'one' => ['All size'],
        ];

        // [brand, kategori, nama, harga, modal, label, warna, set ukuran]
        $rows = [
            ['CHMB', 'tee', 'Heavy Tee Kamar', 269000, 190000, '', '#8d99ae', 'clothes'],
            ['CHMB', 'hoodie', 'Hoodie Ruang Tamu', 519000, 370000, 'Baru', '#c8553d', 'clothes'],
            ['CHMB', 'pants', 'Track Pants Zip', 429000, 300000, '', '#1c1c1e', 'clothes'],
            ['Telepati', 'tee', 'Boxy Tee Sinyal', 249000, 170000, 'Baru', '#2a3cff', 'clothes'],
            ['Telepati', 'hoodie', 'Hoodie Gelombang', 489000, 350000, '', '#3a3a40', 'clothes'],
            ['Telepati', 'beanie', 'Kupluk Antena', 129000, 85000, '', '#c8553d', 'one'],
            ['Calle', 'jacket', 'Jaket Coach Jalanan', 559000, 400000, '', '#6b705c', 'clothes'],
            ['Calle', 'tee', 'Tee Gang Sempit', 229000, 150000, 'Stok terbatas', '#d9d3c7', 'clothes'],
            ['Calle', 'pants', 'Cargo Pants Trotoar', 449000, 310000, 'Baru', '#4a4a3f', 'clothes'],
            ['Preface', 'tee', 'Tee Pembuka', 239000, 160000, '', '#e8e4d8', 'clothes'],
            ['Preface', 'hoodie', 'Hoodie Prolog', 499000, 355000, '', '#2b2d42', 'clothes'],
            ['Preface', 'cap', 'Topi Pengantar', 179000, 115000, '', '#2f3e46', 'one'],
            ['Preface', 'tote', 'Tote Bag Kanvas', 119000, 70000, '', '#e6dfcf', 'one'],
            ['Crocs', 'crocs', 'Classic Clog', 449000, 340000, 'Baru', '#3b7dd8', 'shoes'],
            ['Crocs', 'crocs', 'Classic Clog Hitam', 449000, 340000, '', '#1c1c1e', 'shoes'],
            ['Converse', 'sneakers', 'Chuck 70 Low', 1199000, 920000, '', '#e8e4d8', 'shoes'],
            ['Converse', 'sneakers', 'Chuck Taylor High', 799000, 600000, 'Stok terbatas', '#1c1c1e', 'shoes'],
        ];

        foreach ($rows as [$brand, $cat, $name, $price, $cost, $tag, $color, $sizeSet]) {
            $slug = Str::slug("$brand $name");
            $product = Product::create([
                'brand_id' => Brand::where('name', $brand)->value('id'),
                'category_id' => Category::where('slug', $cat)->value('id'),
                'name' => $name,
                'slug' => $slug,
                'description' => "$name dari $brand.",
                'price' => $price,
                'cost' => $cost,
                'image' => "images/$slug.jpg", // taruh foto dengan nama ini di public/images
                'tag' => $tag ?: null,
                'color' => $color,
            ]);
            foreach ($sizes[$sizeSet] as $i => $size) {
                $product->variants()->create([
                    'size' => $size,
                    'sku' => Str::upper($slug) . '-' . Str::upper(Str::slug($size)),
                    'stock' => 3 + (($i * 5 + strlen($name)) % 9),
                ]);
            }
        }
    }
}
