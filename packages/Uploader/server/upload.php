<?PHP
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

if(!empty($_FILES['file'])) {
  sleep(1.5);
  error_log(print_r("filename: ".$_FILES['file']['name'], true));

  $path = "uploads/";

  error_log("json: ".json_encode($_FILES['file']['name'], JSON_PRETTY_PRINT), true);

  $path = $path . basename($_FILES['file']['name']);

  error_log(print_r("upload: ".$path, true));

  if(move_uploaded_file($_FILES['file']['tmp_name'], $path)) {
    error_log(print_r("moved: ", true));
    http_response_code(200);
  }
} else {
  http_response_code(500);
}

?>
