<?php

namespace App\Models;

use App\Support\HasManyRelation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory, HasManyRelation;

    protected $fillable = ["number", "project_id", "building_id", "unit_type_id", "area", "measurement_type_id", "unit_price", "unit_category_id","total", "image", "created_at", "updated_at"];

    public function project()
    {
        return $this->belongsTo(Project::class, "project_id", "id");
    }
    public function building()
    {
        return $this->belongsTo(Building::class, "building_id", "id");
    }
    public function unit_type()
    {
        return $this->belongsTo(UnitType::class, "unit_type_id", "id");
    }
    public function measurement_type()
    {
        return $this->belongsTo(MeasurementType::class, "measurement_type_id", "id");
    }

    public function unit_category()
    {
        return $this->belongsTo(UnitCategory::class, "unit_category_id", "id");
    }

    public function standard_charges()
    {
        return $this->hasMany(UnitStandardCharge::class,"unit_id", "id");
    }

    public function extra_charges()
    {
        return $this->hasMany(UnitExtraCharge::class,"unit_id", "id");
    }

}
