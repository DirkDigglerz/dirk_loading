

AddEventHandler('playerConnecting', function(name, _setKickReason, deferrals)
  local data = {
    primaryColor = GetConvar('dirk_lib:primaryColor', 'dirk'),
    primaryShade = GetConvarInt('dirk_lib:primaryShade', 9),
    customTheme  = json.decode(GetConvar('dirk_lib:customTheme', json.encode({
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
  
    discordLink      = GetConvar('dirk_loading:discordLink', 'https://discord.gg/'),
    tebexLink        = GetConvar('dirk_loading:tebexLink', 'https://store.example.com'),
    backgroundImages = GetConvarInt('dirk_loading:backgroundImages', 2),
  }
  deferrals.handover(data)
end)