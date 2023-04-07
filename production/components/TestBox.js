
export default function TestBox(props) {
    
    let cssClass;
    const likes = props.likes;

    if (likes % 2 == 1) {
        cssClass = "bg-warning";
    } else {
        cssClass = "bg-success";
    }
    
    return (
        <div className={cssClass} style={{ width: 150, height:150 }}></div>
    )
  }
  