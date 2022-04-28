import { Badge, IconButton } from "@material-ui/core";
import { reviews } from "../../assets/constants/reviews";
import s from "./skillrevi.module.scss";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
let start: number[] = [1, 2, 3, 4, 5];

export const Items = () => {
  return (
    <div className={s.reviev_items}>
      {reviews.map((v) => (
        <div key={v.id} className={s.reviev_items_item}>
          <div className={s.reviev_items_item__top}>
            <div>
              <h2>{v.name}</h2>
              <span>{v.status}</span>
            </div>
            <span>{v.date}</span>
          </div>
          <p className={s.reviev_items_item__middle}>{v.text}</p>
          <div className={s.reviev_items_item__footer}>
            <div>
              {start.map((v) => (
                <svg
                  key={v}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.0002 12.6666L3.10186 15.6583L4.43353 10.0749L0.0751953 6.34159L5.79603 5.88325L8.0002 0.583252L10.2044 5.88325L15.926 6.34159L11.5669 10.0749L12.8985 15.6583L8.0002 12.6666Z"
                    fill="#FFE381"
                  />
                </svg>
              ))}
            </div>
           <div>
           <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <Badge overlap="rectangular" badgeContent={4} color="primary">
                <ThumbUpAltOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              
            >
              <Badge badgeContent={0} overlap="rectangular" color="primary">
                <ThumbDownAltOutlinedIcon />
              </Badge>
            </IconButton>
           </div>
          </div>
        </div>
      ))}
    </div>
  );
};
