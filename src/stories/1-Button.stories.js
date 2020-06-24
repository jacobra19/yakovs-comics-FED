import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { ComicCard } from '../components/General/ComicCard/ComicCard'

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

let comic = {
  "_id": "5e558208e12490d445388e7f",
  "publish": {
    "title": "Marvel",
    "date": "Jun 2004"
  },
  "media": {
    "coverSrc": "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/872837.jpg"
  },
  "series": {
    "title": "Captain America (2002 4th Series)",
    "issue": "25"
  },
  "description": "Written by ROBERT MORALES Pencils by CHRIS BACHALO Cover by DAVE JOHNSON \"HOMELAND\" concludes with a showdown over biological weapons in Cuba, while things heat up between Steve and Rebecca ? and Cap faces a life-changing decision! 32 PGS./MARVEL PSR...$2.99 UPC: 5960605153-02511 Cover price $2.99.",
  "saga": {
    "title": "",
    "currentIssue": "",
    "totalIssues": ""
  },
  "variant": "",
  "creators": {
    "coverArtBy": [],
    "writtenBy": [],
    "pencilsBy": [],
    "inksBy": []
  }
}

export const Card = () => (
  <Button onClick={action('clicked')}>
   <div>hello</div>
  </Button>
)
;
