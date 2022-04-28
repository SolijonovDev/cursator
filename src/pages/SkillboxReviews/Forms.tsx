import s from "./skillrevi.module.scss";
import classNames from "classnames";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Rating } from "@material-ui/lab";
import { FC, useState } from "react";

export const Forms: FC = () => {
  const [value, setValue] = useState<number | null>(2);
  return (
    <div className={s.form}>
      <div className={classNames("container", s.inner)}>
        <div className={s.form_top}>
          <h2>Оставить отзыв</h2>
          <p>
            Ваш адрес email не будет опубликован. Обязательные поля помечены *
          </p>
        </div>
        <div className={s.form_block}>
          <input type="text" placeholder="Комментарий" />
          <input type="text" placeholder="Имя *" />
          <input type="text" placeholder="Email *" />
        </div>
        <div className={s.form_bottom}>
          <div>
            <h4>Рейтинг *</h4>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
          <button>ОСТАВИТЬ ОТЗЫВ</button>
        </div>
      </div>
    </div>
  );
};
