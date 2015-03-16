<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'racii');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '(-4TS)P>BjZ#-w2(kRnS^AUX#^xh1%:EMLm(HX<vYCGIJ%2sd>0#LdW:q-.U>QmK');
define('SECURE_AUTH_KEY',  'l~@Vj9M+sgf-e(-55Z|]t!e/-%>`ZcbmlY>|7nrw9R/QEsU.`q]am#6ol>7M&tE&');
define('LOGGED_IN_KEY',    '>hRsWO?)&AkfGeu_5oL-:<@VICvsn^S8<$SgNzhr(Lj>1@TZ`JLJd)z:oh k{8-b');
define('NONCE_KEY',        'Sk/(t[lN-=u~AN-vi=Wc`i/3CTn,;:>CwIm,!:/fV_pzs(^.ec-h p.^4DT}95wb');
define('AUTH_SALT',        'hc:PAUu5*`-#HSC2tN@eh<Ck(jC@~m8k_dh{!DTGd/Tg0Gqf|lNr<R~$Y0Hrxj#R');
define('SECURE_AUTH_SALT', '#+usAFFj0f}^RpY|,S/ &bwiNKPzIfup-|NlX -&bfRWzc-0V{$d~C_=Am8ETl#e');
define('LOGGED_IN_SALT',   'Z+ihMTA(y-*I|Cn-66*#5_fJx(#--1^Vd|F|SRj`)[KRK+nr<_b~*~*1I[z+-60K');
define('NONCE_SALT',       'U9K-iK2i*sv2(bUz+X@nQPIceDCVxX~:|#CwiMO|2(3ow+hMwhZ K5mSJh+=E2f*');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
