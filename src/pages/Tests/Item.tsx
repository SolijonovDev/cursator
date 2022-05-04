import { FC, useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";

import s from './tests.module.scss'

export const Item: FC = () => {
  const [checked,setChecked]=useState("")
  const handleChange=(text:string)=>{
    console.log("change",text);
      setChecked(text)
  }
  return (
    <div className={s.item}>
      <h2>Вы любите контролировать других людей и вести учет?</h2>
      <div className="forms">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
              // checked={"checkedA"===checked}
              //   onChange={() => handleChange("checkedA")}
                name="checkedA"
              />
            }
            label="Да"
          />
          <FormControlLabel
            control={
              <Checkbox
              // checked={"checkedB"===checked}
              // onChange={() => handleChange("checkedB")}
                name="checkedB"
              />
            }
            label="Нет"
          />
          <FormControlLabel
            control={
              <Checkbox
              // checked={"checkedC"===checked}
              // onChange={() => handleChange("checkedC")}
                name="checkedC"
              />
            }
            label="Затрудняюсь ответить"
          />
        </FormGroup>
      </div>
      
    </div>
  );
};
