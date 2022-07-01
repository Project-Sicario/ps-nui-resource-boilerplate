fx_version "cerulean"
version '1.0.0'
name "ps-nui-resource-boilerplate"
description "ps-nui-resource-boilerplate"
author 'Rory Pearson (Mezmerizxd)'
url "https://github.com/Project-Sicario/ps-nui-resource-boilerplate"

lua54 'yes'
game "rdr3"

ui_page 'build/index.html'

client_script 'dist/client/*.client.js'

server_script 'dist/server/*.server.js'

files {
  'build/index.html',
  'build/**/*'
}

rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'
