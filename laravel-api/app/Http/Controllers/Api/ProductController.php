<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // GET /api/products?brand=calle&category=hoodie&q=tee&sort=price_asc
    public function index(Request $request): JsonResponse
    {
        $request->validate([
            'brand'    => 'nullable|string|max:60',
            'category' => 'nullable|string|max:60',
            'q'        => 'nullable|string|max:60',
            'sort'     => 'nullable|in:newest,price_asc,price_desc,name',
        ]);

        $query = Product::query()
            ->where('is_active', true)
            ->with(['brand:id,name,slug', 'category:id,name,slug', 'variants:id,product_id,size,stock']);

        if ($request->filled('brand')) {
            $query->whereHas('brand', fn ($b) => $b->where('slug', $request->brand));
        }
        if ($request->filled('category')) {
            $query->whereHas('category', fn ($c) => $c->where('slug', $request->category));
        }
        if ($request->filled('q')) {
            $query->where('name', 'like', '%' . $request->q . '%');
        }

        match ($request->input('sort', 'newest')) {
            'price_asc'  => $query->orderBy('price'),
            'price_desc' => $query->orderByDesc('price'),
            'name'       => $query->orderBy('name'),
            default      => $query->orderByDesc('id'),
        };

        return response()->json(['data' => $query->get()]);
    }

    // GET /api/products/{slug}
    public function show(Product $product): JsonResponse
    {
        abort_unless($product->is_active, 404);
        $product->load(['brand:id,name,slug', 'category:id,name,slug', 'variants:id,product_id,size,stock']);

        return response()->json(['data' => $product]);
    }
}
