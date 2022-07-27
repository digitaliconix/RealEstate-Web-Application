<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'domain', 'created_at', 'updated_at'];

    protected $appends = ['status_text'];

    public function getStatusTextAttribute(){
        return $this->attributes['status'] == 1 ? 'Active' : 'In-Active';
    }

}
