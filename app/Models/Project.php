<?php

namespace App\Models;

use App\Support\HasManyRelation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory, HasManyRelation;

    protected $fillable = [
        'title', 'website', 'country_id', 'city_id', 'location', 'nearest_location', 'phone_number', 'land_space', 'company_id', 'project_type_id', 'created_at', 'updated_at'
    ];

    public function country()
    {
        return $this->belongsTo(Country::class,'country_id', 'id');
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id', 'id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id', 'id');
    }

    public function project_type()
    {
        return $this->belongsTo(ProjectType::class, 'project_type_id', 'id');
    }

    public function buildings()
    {
        return $this->hasMany(Building::class,'project_id', 'id');
    }

    public function unit_types()
    {
        return $this->hasMany(UnitType::class,'project_id', 'id');
    }

    public function extra_charge_types()
    {
        return $this->hasMany(ProjectChargeType::class,'project_id', 'id');
    }

    public function images()
    {
        return $this->hasMany(ProjectImage::class, 'project_id', 'id');
    }



}
