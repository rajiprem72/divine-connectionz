     const API_KEY = 'AIzaSyDAVB7a599t2To9oz8oP__1_bhNb4YOoRg';
        const channelId = 'UCUdlewvf5aiwwG5AQ2v3Y0Q';
        function searchYoutube(){
            const searchValue = document.getElementById("search").value;
            const searchUrl = `https://www.googleapis.com/youtube/v3/search?
part=snippet&q=${searchValue}&type=video&channelId=${channelId}&maxResults=5&key=
${API_KEY}`;
          fetch(searchUrl)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        if (data.error) {
            alert(
                data.error.message +
                "\n\nReason: " +
                data.error.errors[0].reason
            );
            return;
        }

        const resultsBody = document.getElementById('results-body');

        resultsBody.innerHTML = "";

        data.items.forEach(function(item) {

            const videoId = item.id.videoId;
            const videoTitle = item.snippet.title;

            const videoLink =
                `https://www.youtube.com/watch?v=${videoId}`;

            resultsBody.innerHTML += `
                <tr>
                    <td>${videoTitle}</td>
                    <td>
                        <a href="${videoLink}" target="_blank">
                            ${videoLink}
                        </a>
                    </td>
                </tr>
            `;
        });

    });
