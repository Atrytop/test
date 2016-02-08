<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>han</title>
  <link rel="stylesheet" href="css/common.css">
  <style>
    html, body, .wrap {
      width: 100%;
      height: 100%;
    }
    header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px;
      border: 1px solid red;
    }
    footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50px;
      border: 1px solid green;
    }
    .body {
      width: 100%;
      height: 100%;
    }
    .one {
      width: 50%;
      height: 50%;
      border-radius: 100%;
      background-color: #333;
      box-shadow: 0 0 5px yellow;
    }
    footer {
      text-align: center;
      line-height: 50px;
    }
  </style>
</head>
<body>
  <div class="wrap" id="wrap">
    <header></header>
    <div class="body">
      <div class="one"></div>
    </div>
    <footer>看·</footer>
  </div>
</body>
</html>