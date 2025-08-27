version      '1.0.7'
fx_version "cerulean"
lua54 'yes'
games {
  "gta5",
  "rdr3"
}

files {
	'web/build/index.html',
	'web/build/public/*',
	'web/build/**/*',
	'web/assets/*.*',
}

server_scripts {
  'src/server/*.lua',
}

loadscreen 'web/build/index.html'

loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'
