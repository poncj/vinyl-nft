import styles from '../styles/Index.module.css';
export default function CarouselItem(props) {

    const initActiveId = 1;
    const srcImage = props.srcImage;
    const titleImage = props.titleImage;
    const descriptionImage = props.descriptionImage;

    const classCustomName = ""; 
    
    return (
        <div className={props.id == initActiveId ? "carousel-item active" : "carousel-item"}>
            <img src={srcImage} className="d-block rounded w-100"/>
            <div className="carousel-caption d-none d-md-block">
                <h5 className="p-1 rounded carousel-item-song">{titleImage}</h5>
                {/* <p>{descriptionImage}</p> */}
            </div>
        </div>
    )
}