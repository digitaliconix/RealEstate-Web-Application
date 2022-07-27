<?php

use Illuminate\Support\Facades\Storage;

function upload($storage,$file,$path,$file_name){
    Storage::disk($storage)->putFileAs(
        $path,
        $file,
        $file_name
    );
}

function deleteFile($storage,$path,$file){
    Storage::disk($storage)->delete($path.$file);
}
