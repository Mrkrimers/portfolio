import style from '../svg/style.module.scss'

export default function Svg({ id }) {
    switch (id) {
        case "one":
            return (<div className={style.img1}></div>);
        case "two":
            return (<div className={style.img2}></div>);

        default:
            return;
    }
}