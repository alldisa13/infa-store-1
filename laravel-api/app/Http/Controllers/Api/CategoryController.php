<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    // GET /api/categories
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => Category::withCount('products')->orderBy('name')->get(),
        ]);
    }
}
