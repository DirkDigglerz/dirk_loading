
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
    carouselTime = GetConvarInt('dirk_loading:carouselTime', 5),
  
    links      = json.decode(GetConvar('dirk_loading:links', json.encode({
      { title = 'Discord', icon = 'fab fa-discord', url = 'https://discord.gg/example' },
      { title = 'Tebex', icon = 'fas fa-shopping-cart', url = 'https://store.example.com' }
    }))),

    songs     = json.decode(GetConvar('dirk_loading:songs', json.encode({
      { title = 'Song 1', artist = 'Artist 1', fileName = 'song1.mp3', coverArt = 'https://example.com/song1.jpg' },
      { title = 'Song 2', artist = 'Artist 2', fileName = 'song2.mp3', coverArt = 'https://example.com/song2.jpg' },
      { title = 'Song 3', artist = 'Artist 3', fileName = 'song3.mp3', coverArt = 'https://example.com/song3.jpg' }
    }))),

    changelogs = json.decode(GetConvar('dirk_loading:changelogs', json.encode({
      {
        title = 'Update 1.0',
        date = '2023-10-01',
        entries = {
          {
            type = 'addition',
            text = 'Initial release with basic features.'
          },
          {
            type = 'change',
            text = 'Improved loading times and UI responsiveness.'
          },
          {
            type = 'fix',
            text = 'Fixed minor bugs in the audio player.'
          }
        }
      },
    }))),
  
    backgroundImages = GetConvarInt('dirk_loading:backgroundImages', 2),

    playersOfTheMonth = getPlayersOfTheMonth(),
  }
  deferrals.handover(data)
end)