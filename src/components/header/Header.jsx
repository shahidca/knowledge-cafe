import profile from "../../assets/profile.png"
export default function Headers(){
    return(
        <div className="flex justify-between items-center w-11/12 mx-auto mt-4 border-b-2 pb-4">
            <h1 className="text-4xl font-bold">Knowledge of Cafe</h1>
            <img src={profile} alt="" />
        </div>
    )
}