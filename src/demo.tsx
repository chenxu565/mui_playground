import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { styled } from '@mui/material/styles';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

enum Color {
  Green = "green",
  Yellow = "yellow",
  Orange = "orange",
  Red = "red",
  Grey = "grey"
}

const getColorForRating = (rating: number): Color => {
  switch (true) {
    case rating < 1:
      return Color.Green;
    case rating < 2:
      return Color.Yellow;
    case rating < 3:
      return Color.Orange;
    case rating < 4:
      return Color.Red;
    default:
      return Color.Grey;
  }
};
type BarProps = {
  rating: number;
  showText: boolean;
};



const HEALTHBAR_TEXTS = [
  "The patient is in great shape",
  "The patient has a low risk of getting sick",
  "The patient has a high risk of getting sick",
  "The patient has a diagnosed condition",
];
// const HealthRatingBar = ({ rating, showText }: BarProps) => {
//   const color = getColorForRating(rating);
//   return (
//     <div className="health-bar">
//       <StyledRating
//         // readOnly
//         value={4 - rating}
//         max={4}
//         icon={<Favorite fontSize="inherit" sx={{ color: getColorForRating(rating) }} />}
//         emptyIcon={<FavoriteBorderIcon fontSize="inherit" sx={{ color: 'grey' }} />}
//       />

//       {showText ? <p>{HEALTHBAR_TEXTS[rating]}</p> : null}
//     </div>
//   );
// };

export default function CheckboxesTags() {
  const [value, setValue] = useState(['']);
  const [value2, setValue2] = useState<number|null>(2);
  const [rating, setRating] = useState<number>(-1);
  const [hover, setHover] = useState<number>(-1); 
  const [iconFilledVar, setIconFilled] = useState<string>('grey');
  const [iconHoverVar, setIconHover] = useState<string>('grey');

  return (
    <>
      <Box>
        <Rating
          value={rating}
          max={4}
          onChange={(event, newRating) => {
            setRating(newRating ?? 0);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          icon={<Favorite fontSize="inherit" sx={{ color: hover > -1 ? getColorForRating(4-hover) : getColorForRating(4-rating) }} />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" sx={{ color: 'grey' }} />}
        />
          {rating ? <p>{HEALTHBAR_TEXTS[4-rating]}</p> : null}
      </Box>


    {/* <Box>
    <Rating
        // readOnly
        value={rating? rating : 0}
        max={4}
        icon={<Favorite fontSize="inherit" />}
        // icon={<Favorite fontSize="inherit" sx={{ color: getColorForRating(rating) }} />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" sx={{ color: 'grey' }} />}
        // onChange={(event, newValue) => {
        //   console.log(typeof newValue);
        //   setRating(newValue);
        // }}
        onChange={(event, newRating) => {
          const newRatingInt = newRating? newRating : 0;
          switch (true) {
            case newRatingInt <= 1:
              setIconFilled('green');
              return "The patient is in great shape";
            case newRatingInt <= 2:
              setIconFilled('yellow');
              return "The patient has a low risk of getting sick";
            case newRatingInt <= 3:
              setIconFilled('orange');
              return "The patient has a high risk of getting sick";
            case newRatingInt <= 4:
              setIconFilled('red');
              return "The patient has a diagnosed condition";
            default:
              return "The patient is in great shape";
          }
        }
        }
        onChangeActive={(event, newHover) => {
          switch (true) {
            case newHover <= 1:
              setIconHover('green');
              return "The patient is in great shape";
            case newHover <= 2:
              setIconHover('yellow');
              return "The patient has a low risk of getting sick";
            case newHover <= 3:
              setIconHover('orange');
              return "The patient has a high risk of getting sick";
            case newHover <= 4:
              setIconHover('red');
              return "The patient has a diagnosed condition";
            default:
              return "The patient is in great shape";
          }
        }}          
        classes={{
          iconFilled: iconFilledVar,
          iconHover: iconHoverVar
        }}
      />
      {rating? <p>{HEALTHBAR_TEXTS[4-rating]}</p> : null}
    </Box> */}
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value2}
        onChange={(event, newValue) => {
          console.log(typeof newValue);
          setValue2(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value2} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value2} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
    </>
  );
}












// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];
