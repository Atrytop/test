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
      background-color: #ccc;
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
    <div class="body dis-flex  main-center cross-center">
      <div class="one">
        这个是为了测试merge版本
        <br/>
        这个是为了测试两个的合并功能
      </div>
    </div>
    <footer>看·这里，看这里。新增加了一行代码</footer>
  </div>
</body>
</html>
