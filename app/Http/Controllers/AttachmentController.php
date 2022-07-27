<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

class AttachmentController extends Controller
{
    public function showProjectAttachment($domain,$folder,$filename)
    {
        $path = storage_path() . "/app/public/".$folder."/". $filename;

//        dd($path);
        if (!File::exists($path)) {

            abort(404);
        }
        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);
        return $response;
    }
    public function showProjectUnitAttachment($domain,$base_folder,$folder,$filename)
    {
        $path = storage_path() . "/app/public/".$base_folder."/".$folder."/".$filename;

//        dd($path);
        if (!File::exists($path)) {

            abort(404);
        }
        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);
        return $response;
    }

}
