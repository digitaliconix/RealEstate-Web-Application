<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnitStandardCharge extends Model
{
    use HasFactory;

    protected $fillable = ["unit_id", "project_charge_type_id", "price", "created_at", "updated_at"];

    public function project_charge_type()
    {
        return $this->belongsTo(ProjectChargeType::class,"project_charge_type_id", "id");
    }
}
