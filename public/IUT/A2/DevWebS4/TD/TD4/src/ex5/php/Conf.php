<?php

class Conf {
    private static $database = array(
        'hostname' => 'localhost',
        'database' => 'verbes',
        'port' => '3306', // IUT : 3316, sinon 3306
        'login'    => 'root',
        'password' => '!Fp!d].d7N]Ir5]C'
    );

    static public function getLogin() {
        return self::$database['login'];
    }

    static public function getHostname() {
        return self::$database['hostname'];
    }

    static public function getDatabase() {
        return self::$database['database'];
    }

    static public function getPassword() {
        return self::$database['password'];
    }

    static public function getPort() {
        return self::$database['port'];
    }

}
