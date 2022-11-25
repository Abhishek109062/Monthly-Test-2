
function loadmovie() {
    const x = document.getElementById("in-srch")
    fetch('https://api.tvmaze.com/search/shows?q=' + x.value).then(res => res.json()).then(
        res => {
            console.log(res[0].show.image.medium)
            var rrrrt = "";
            res.map((rooor) => {
                if (rooor.show.image != null)
                    rrrrt += '<img src="' + rooor.show.image.medium + '" alt="" width="260" height="320">'
            })
            document.getElementById('movie-list').innerHTML = rrrrt;

        }
    )
}


function change(ref) {
    console.log(ref)
    document.getElementById('head').style.backgroundColor = ref;
}
