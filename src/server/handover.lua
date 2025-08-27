
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
    carouselTime = GetConvarInt('dirk_loading:carouselTime', 15),
  
    links      = json.decode(GetConvar('dirk_loading:links', json.encode({
      { title = 'Discord', icon = 'fab fa-discord', url = 'https://discord.gg/example' },
      { title = 'Tebex', icon = 'fas fa-shopping-cart', url = 'https://store.example.com' }
    }))),
    songs     = json.decode(GetConvar('dirk_loading:songs', json.encode({
      {
        title = 'Dream Machine',
        artist = 'Mark Farina',
        fileName = 'dreamMachine.mp3',
        coverArt = 'https://f4.bcbits.com/img/a2995438944_10.jpg'
      },
      {
        title = 'Real Love Baby',
        artist = 'Father John Misty',
        fileName = 'realLove.mp3',
        coverArt = 'https://upload.wikimedia.org/wikipedia/en/f/f1/Father_John_Misty_-_Real_Love_Baby.jpg'
      }
    }))),

    changelogs = json.decode(GetConvar('dirk_loading:changelogs', json.encode({
      {
        title = 'Update 1.0',
        date = '2023-10-01',
        entries = {
          {
            type = 'addition',
            content = 'Initial release with basic features.'
          },
          {
            type = 'change',
            content = 'Improved loading times and UI responsiveness.'
          },
          {
            type = 'fix',
            content = 'Fixed minor bugs in the audio player.'
          }
        }
      },
    }))),
  
    backgroundImages = GetConvarInt('dirk_loading:backgroundImages', 6),

    playersOfTheMonth = {},
  }
  deferrals.handover(data)
end)