<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\JsonResponse;

class BrandController extends Controller
{
    // GET /api/brands
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => Brand::withCount('products')->orderBy('name')->get(),
        ]);
    }
}
