<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Rake</title>

  <link rel="dns-prefetch" href="//ajax.googleapis.com">
  <link rel="dns-prefetch" href="//fonts.googleapis.com">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="cleartype" content="on">

  <!-- style -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link rel="stylesheet" href="stylesheets/css/styles.css">
  <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,600italic,400italic,700" rel="stylesheet">
</head>
<body>
<div class="page">

  <header class="header">
      <a href="/">
        <h1>Rake</h1>
      </a>
     <p style="color: rgb(240,55,165); font-weight: bold;">Prototype wireframes</p>
     <p>
       <a href="bootstrap.php">
        with bootstrap Elements
       </a>
     </p>
  </header>

  <main class="main">

    <div class="container" style="padding-left: 0; margin-left: 0;">
    <section class="prototype">
      <div id="left" class="prototype__scroll">
      </div>
    </section>
    </div>

    <aside id="right" class="components">

        <div class="components__controls">
          <button type="button" class="btn-reset">Destroy Prototype</button>
        </div>

        <div class="item" data-elem="jumbotron">
          <div class="item__description" >
            Jumbo Tron
          </div>
        </div>
        <div class="item" data-elem="navbar">
          <div class="item__description" >
            Navbar
          </div>
        </div>
        <div class="item" data-elem="breadcrumb">
          <div class="item__description" >
            Breadcrumb
          </div>
        </div>
        <div class="item" data-elem="pagination">
          <div class="item__description" >
            Pagination
          </div>
        </div>
        <div class="item" data-elem="table">
          <div class="item__description" >
            Table
          </div>
        </div>

    </aside>
    </div>
  </main>

</div>
<script async src="javascripts/dist/app.js"></script>
</body>
</html>
