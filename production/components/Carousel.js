import { useCallback } from "react";
import CarouselItem from "./CarouselItem";

export default function Carousel(props) {
    
    let CarouselItemData = [];

    CarouselItemData.push({
        id: 1,
        srcImage: '/img/img0.png',
        titleImage: "Song #1: What'd I Say - Ray Charles (1959)",
        descriptionImage: "Description One"
    });

    CarouselItemData.push({
        id: 2,
        srcImage: '/img/img1.png',
        titleImage: "Song #2: I Will Always Love You - Whitney Houston (1974)",
        descriptionImage: 'Description Two'
    });

    CarouselItemData.push({
        id: 3,
        srcImage: '/img/img2.png',
        titleImage: "Song #3: Johnny B Goode - Chuck Berry (1958)",
        descriptionImage: 'Description Three'
    });

    CarouselItemData.push({
        id: 4,
        srcImage: '/img/img3.png',
        titleImage: "Song #4: Waterloo Sunset - The Kinks (1967)",
        descriptionImage: 'Description Three'
    });

    CarouselItemData.push({
        id: 5,
        srcImage: '/img/img4.png',
        titleImage: "Song #5: No Woman No Cry - Bob Marley (1975)",
        descriptionImage: 'Description Three'
    });

    CarouselItemData.push({
        id: 6,
        srcImage: '/img/img5.png',
        titleImage: "Song #6: Bohemian Rhapsody - Queen (1975)",
        descriptionImage: 'Description Three'
    });

    CarouselItemData.push({
        id: 7,
        srcImage: '/img/img6.png',
        titleImage: "Song #7: One - U2 (1992)",
        descriptionImage: 'Description Three'
    });

    CarouselItemData.push({
        id: 8,
        srcImage: '/img/img7.png',
        titleImage: "Song #8: Like A Rolling Stone - Bob Dylan (1967)",
        descriptionImage: 'Description Three'
    });

    CarouselItemData.push({
        id: 9,
        srcImage: '/img/img8.png',
        titleImage: "Song #9: Waterloo Sunset - The Kinks (1967)",
        descriptionImage: 'Description Three'
    });

    CarouselItemData.push({
        id: 10,
        srcImage: '/img/img9.png',
        titleImage: "Song #10: Best Of My Love - The Emotions (1977)",
        descriptionImage: 'Description Three'
    });
    
    /*
    let testCase = useCallback(async (contract) => {
        if (!contract) {
            return false;
        }
        let result = await contract.filters.Transfer('0x0000000000000000000000000000000000000000', null, null);
        console.log(result);
    });
    testCase(props.children.contract);
    */
    
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
            </div>
            <div className="carousel-inner shadow-lg">
                {
                    CarouselItemData.map(item => (
                        <CarouselItem key={item.id} id={item.id} srcImage={item.srcImage} titleImage={item.titleImage} descriptionImage={item.descriptionImage}/>
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}