<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $fillable = [
        'brand_id', 'category_id', 'name', 'slug', 'description',
        'price', 'cost', 'image', 'tag', 'color', 'is_active',
    ];

    // Harga modal TIDAK boleh bocor ke pembeli lewat API publik.
    protected $hidden = ['cost'];

    protected $casts = ['is_active' => 'boolean', 'price' => 'integer'];

    public function getRouteKeyName(): string
    {
        return 'slug'; // /api/products/calle-tee-gang-sempit
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function variants(): HasMany
    {
        return $this->hasMany(ProductVariant::class);
    }
}
