<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    use HasFactory;

    protected $fillable = ["title", "description", "project_id", "created_at", "updated_at"];

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }
}
