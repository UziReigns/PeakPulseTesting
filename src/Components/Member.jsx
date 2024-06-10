import './Member.css';
function Member(name="None", img="./src/assets/facebook-default-no-profile-pic.jpg")
{
    return (   
        <div className="padding-right">
            <img src={img}/>
            <div className="name-background-color">
                <p>{name}</p>
            </div>
        </div>
    )
}
export default Member