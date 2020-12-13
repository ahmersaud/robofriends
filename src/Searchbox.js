const Searchbox=({searchchange})=>{
    return(
        <input type="search" placeholder="Search Robots" onChange={searchchange}/>
    );
}

export default Searchbox;