import { FC, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";

import s from "./tests.module.scss";

export const Item: FC = () => {
  return (
    <div className={s.item}>
      <h2>Вы любите контролировать других людей и вести учет?</h2>
      <div className="forms">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row={false}>
            <div className={s.form_block}>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Да"
                labelPlacement="end"
              />
            </div>
            <div className={s.form_block}>
              <FormControlLabel
                value="End"
                control={<Checkbox color="primary" />}
                label="Нет"
                labelPlacement="end"
              />
            </div>
            <div className={s.form_block}>
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    color="primary"
                  />
                }
                label="Затрудняюсь ответить"
                labelPlacement="end"
              />
            </div>
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};
