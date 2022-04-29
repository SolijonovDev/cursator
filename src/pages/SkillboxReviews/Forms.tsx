import s from "./skillrevi.module.scss";
import classNames from "classnames";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Rating } from "@material-ui/lab";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  comments: string;
  name: string;
  email: string;
}

const schema = yup
  .object({
    comments: yup.string().required().length(80),
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

export const Forms: FC = () => {
  const [value, setValue] = useState<number | null>(2);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <div className={s.form}>
      <div className={classNames("container", s.inner)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form_top}>
            <h2>Оставить отзыв</h2>
            <p>
              Ваш адрес email не будет опубликован. Обязательные поля помечены *
            </p>
          </div>
          <div className={s.form_block}>
            <input
              className={errors.comments ? s.error : s.success}
              {...register("comments", {
                required: "Text 80 ta belgidan ko'p bolmasligi kerak",
              })}
              placeholder="Comments"
            />
            <p>{errors.comments?.message}</p>
            <input
              type="text"
              className={errors.name ? s.error : s.success}
              {...register("name", { pattern: /^[A-Za-z]+$/i })}
              placeholder="Name"
            />
            <p>{errors.name?.message}</p>
            <input
              className={errors.email ? s.error : s.success}
              type="text"
              {...register("email")}
              placeholder="Email"
            />
            <p>{errors.email?.message}</p>
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
            <button type="submit">ОСТАВИТЬ ОТЗЫВ</button>
          </div>
        </form>
      </div>
    </div>
  );
};
