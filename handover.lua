

AddEventHandler('playerConnecting', function(name, _setKickReason, deferrals)
  print('Player connecting: ' .. name)
  local data = {
    primaryColor = GetConvar('clean_lib:primaryColor', 'clean'),
    primaryShade = GetConvarInt('clean_lib:primaryShade', 9),
    customTheme  = json.decode(GetConvar('clean_lib:customTheme', json.encode({
      "#f8edff",
      "#e9d9f6",
      "#d0b2e8",
      "#b588da",
      "#9e65cf",
      "#914ec8",
      "#8a43c6",
      "#7734af",
      "#692d9d",
      "#5c258b"
    }))),
  
    discordLink      = GetConvar('clean_loading:discordLink', 'https://discord.gg/'),
    tebexLink        = GetConvar('clean_loading:tebexLink', 'https://store.example.com'),
    backgroundImages = GetConvarInt('clean_loading:backgroundImages', 5),
  }
  print('Handing over to loading screen')

  deferrals.handover(data)
end)