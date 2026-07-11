     const API_KEY = 'AIzaSyDiFQhzkFVdYOz4NNcLiOGu--u6Lh2MvjY';
        const channelId = 'UCUdlewvf5aiwwG5AQ2v3Y0Q';
        function searchYoutube(){
            const searchValue = document.getElementById("search").value;
            const searchUrl = `https://www.googleapis.com/youtube/v3/search?
part=snippet&q=${searchValue}&type=video&channelId=${channelId}&maxResults=5&key=
${API_KEY}`;
            fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                // Extract the videoId and title from the results
                const resultsBody = document.getElementById('results-body');
                resultsBody.innerHTML = "";
                data.items.forEach(function(item) {
                    const videoId = item.id.videoId;
                    const videoTitle = item.snippet.title;
                    // Construct the link to the video
                    const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
                    // Add the link to the results table
                    resultsBody.innerHTML += `<tr><td>${videoTitle}</td><td><a 
href="${videoLink}">${videoLink}</a></td></tr>`;
                });
            });
        }
