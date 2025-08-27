# Dirk Pack Loading Screen 



# Convars 
```cfg
# =====================================
# Dirk Loading Screen - ConVars
# =====================================

# The theme below will apply to all UI created by DirkScripts utilising the lib themes.
# Theme starts at 0 and goes to 9
# 0 is the lightest color and 9 is the darkest
# You can set the primary color to custom and set the customTheme to your own colors
# Use this generator to make custom palettes: https://mantine.dev/colors-generator/?color=7b36b5
# Default Mantine colors: https://mantine.dev/theming/colors/#default-colors
setr dirk_lib:primaryColor dirk        # Set to 'custom' to use customTheme
setr dirk_lib:primaryShade 9           # 0-9
setr dirk_lib:customTheme [
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
]

# -------------------------------------
# Loading Screen Settings
# -------------------------------------
setr dirk_loading:carouselTime 15      # Seconds per background image
setr dirk_loading:backgroundImages 6   # Number of images available for rotation

# Links shown on the loading screen (Font Awesome icon classes)
setr dirk_loading:links [
  { "title": "Discord", "icon": "fab fa-discord", "url": "https://discord.gg/example" },
  { "title": "Tebex",   "icon": "fas fa-shopping-cart", "url": "https://store.example.com" }
]

# Music playlist (files should exist in your loading resource)
setr dirk_loading:songs [
  {
    "title": "Dream Machine",
    "artist": "Mark Farina",
    "fileName": "dreamMachine.mp3",
    "coverArt": "https://f4.bcbits.com/img/a2995438944_10.jpg"
  },
  {
    "title": "Real Love Baby",
    "artist": "Father John Misty",
    "fileName": "realLove.mp3",
    "coverArt": "https://upload.wikimedia.org/wikipedia/en/f/f1/Father_John_Misty_-_Real_Love_Baby.jpg"
  }
]

# Changelogs (displayed in the UI)
setr dirk_loading:changelogs [
  {
    "title": "Update 1.0",
    "date": "2023-10-01",
    "entries": [
      { "type": "addition", "content": "Initial release with basic features." },
      { "type": "change",   "content": "Improved loading times and UI responsiveness." },
      { "type": "fix",      "content": "Fixed minor bugs in the audio player." }
    ]
  }
]


```