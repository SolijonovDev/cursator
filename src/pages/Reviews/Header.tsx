import { FC } from "react";
import s from "./reviews.module.scss";

export const Header: FC = () => {
  return (
    <div className={s.head}>
      <div className="container">
        <div className={s.head_texts}>
          <h2>Отзывы об онлайн-школах</h2>
          <p>
            Предоставив возможность ученикам цифровых образовательных платформ
            поделиться впечатлениями об обучении, мы собрали отзывы об
            онлайн-школах и курсах, которые они представляют. Мнение выпускников
            поможет сделать верный выбор и отдать предпочтение лучшей школе.
          </p>
        </div>
      </div>
    </div>
  );
};
