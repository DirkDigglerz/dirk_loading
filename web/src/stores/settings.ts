import { MantineColor, MantineColorShade, MantineColorsTuple } from "@mantine/core";

export type PlayerProps = {
  name: string;
  img: string;
  votes: number;
}



export type ChangelogEntryProps = {
  title: string; 
  date: string;
  entries: {
    type: 'addition' | 'change' | 'fix';
    content: string;
  }[];
}


export type Track = {
  title: string;
  artist: string;
  fileName: string;
  coverArt?: string;
}

export type LinkProps = {
  title: string;
  icon: string;
  url: string;
}

export type SettingsProps = {
  primaryColor: MantineColor;
  primaryShade: MantineColorShade;
  customTheme: MantineColorsTuple;
  
  carouselTime: number;
  
  links: LinkProps[];
  songs: Track[];
  changelogs: ChangelogEntryProps[];
  backgroundImages:number;
  playersOfTheMonth: PlayerProps[];
  // Add more settings here
};



import { create } from 'zustand';

export const useSettings = create<SettingsProps>(() => ({
  primaryColor:'custom', 
  primaryShade: 9,
  customTheme: [
    "#deffff",
    "#caffff",
    "#99ffff",
    "#72ffff",
    "#3dffff",
    "#26ffff",
    "#09ffff",
    "#00e3e3",
    "#00cacb",
    "#00afb0"
  ],

  
  carouselTime: 5,
  links: [
    {
      title: 'Discord',
      icon: 'fab fa-discord',
      url: 'https://discord.gg/your-discord-link'
    },
    {
      title: 'Tebex',
      icon: 'fa-store',
      url: 'https://your-tebex-store-link'
    },
  ],

  backgroundImages: 2,


  playersOfTheMonth: [
    {
      name: 'Dirk Digger',
      img: 'https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fv1684429920%2Finstasize-website%2Flearn%2Favatar-robot-discord.webp&w=828&q=75',
      votes: 100,
    },
    {
      name: 'John Doe',
      img: 'https://art.pixilart.com/44df38dcf8ec8ac.png',
      votes: 80,
    },
    {
      name: 'Jane Smith',
      img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4043fb3e-e034-498f-a977-2f1aa13d6ddb/debhc8g-2a81c736-7afd-49f9-bec1-7f2f495326eb.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQwNDNmYjNlLWUwMzQtNDk4Zi1hOTc3LTJmMWFhMTNkNmRkYlwvZGViaGM4Zy0yYTgxYzczNi03YWZkLTQ5ZjktYmVjMS03ZjJmNDk1MzI2ZWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fs3Ojin-Hh7fSRHX3O-9o5SH_-la1GsJfHYwmqFEUVg',
      votes: 60,
    }
  ],

  changelogs: [
    {
      title: 'Initial Release',
      date: '2023-10-01',
      entries: [
        {
          type: 'addition',
          content: 'Added initial release of the application.'
        },
        {
          type: 'change',
          content: 'Updated the UI to be more user-friendly.'
        },
        {
          type: 'fix',
          content: 'Fixed bugs in the login process.'
        }
      ]
    },
    {
      title: 'Version 1.1',
      date: '2023-10-15',
      entries: [
        {
          type: 'addition',
          content: 'Added new features to the application.'
        },
        {
          type: 'change',
          content: 'Improved performance of the application.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
        {
          type: 'fix',
          content: 'Fixed issues with the settings page.'
        },
      ]
    },
  ],
  songs: [
    {
      title: 'Dream Machine',
      artist: 'Mark Farina',
      fileName: 'dreamMachine.mp3',
      coverArt: 'https://f4.bcbits.com/img/a2995438944_10.jpg'
    },
    {
      title: 'Real Love Baby',
      artist: 'Father John Misty',
      fileName: 'realLove.mp3',
      coverArt: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Father_John_Misty_-_Real_Love_Baby.jpg'
    },
  ],
}));
