<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectChargeType extends Model
{
    use HasFactory;

    protected $fillable = ["title", "charge_type_id", "project_id", "price", "description", "created_at", "updated_at"];

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }

    public function charge_type()
    {
        return $this->belongsTo(ChargeType::class, 'charge_type_id', 'id');
    }
}
