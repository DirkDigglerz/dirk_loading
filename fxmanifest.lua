version '1.0.0'
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
  'handover.lua',
}

loadscreen 'web/build/index.html'

loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'
