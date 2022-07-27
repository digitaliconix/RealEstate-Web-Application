<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnitType extends Model
{
    protected $fillable = ["title", "base_price", "area", "measurement_type_id", "description", "project_id", "created_at", "updated_at"];

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }

    public function measurement_type()
    {
        return $this->belongsTo(MeasurementType::class, 'measurement_type_id', 'id');
    }
}
