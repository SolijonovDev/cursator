import s from "./tests.module.scss";
import { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl
} from "@material-ui/core";

export const Item = () => {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { gilad, jason, antoine } = state;
  return (
    <div className={s.item}>
      <div>
        <h2>Вы любите контролировать других людей и вести учет?</h2>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
{/* 
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox 
              color="secondary"
              checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Да"
          />
          <FormControlLabel
            control={
              <Checkbox 
              color="secondary"
              checked={jason} onChange={handleChange} name="jason" />
            }
            label="Нет"
          />
          <FormControlLabel
            control={
              <Checkbox
              color="secondary"
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Затрудняюсь ответить"
          />
        </FormGroup>
      </FormControl> */}
    </div>
  );
};
