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
      text-align: center;
    }
    .body {
      width: 100%;
      height: 100%;
      background-color: #333;
    }
    .one {
      width: 50%;
      height: 50%;
      border: 5px solid #fff;
      border-radius: 100%;
      background-color: #333;
      box-shadow: 0 0 5px yellow;
      background-image: url(../images/1.jpg);
      background-position: center;
      background-size: 100% 100%;
    }
  </style>
</head>
<body>
  <div class="wrap" id="wrap">
    <header></header>
    <div class="body dis-flex col-flex main-center cross-center">
      <div class="one">
        五福临门！！
      </div>
      <p>
        emails:hanshuangli01@gmail.com
      </p>
    </div>
    <footer>看·我没有增加啊！</footer>
  </div>
</body>
</html>
