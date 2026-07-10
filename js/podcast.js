// ==========================================
// Divine Connectionz
// podcast.js
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const rssUrl =
        "https://anchor.fm/s/77d12244/podcast/rss";

    const container =
        document.getElementById("podcastEpisodes");

    fetch(

        "https://api.allorigins.win/raw?url=" +

        encodeURIComponent(rssUrl)

    )

    .then(response => response.text())

    .then(xmlText => {

        const parser = new DOMParser();

        const xml = parser.parseFromString(

            xmlText,

            "text/xml"

        );

        const episodes = xml.querySelectorAll("item");

        container.innerHTML = "";

        episodes.forEach(function (episode) {

            const title =

                episode.querySelector("title")
                ?.textContent || "Untitled";

            const description =

                episode.querySelector("description")
                ?.textContent || "";

            const audio =

                episode.querySelector("enclosure")
                ?.getAttribute("url");

            const pubDate =

                episode.querySelector("pubDate")
                ?.textContent || "";

            const card = document.createElement("div");

            card.className = "episode-card";

            card.innerHTML = `

                <h3>${title}</h3>

                <p class="episode-date">

                    ${pubDate}

                </p>

                <p>

                    ${description}

                </p>

                <audio controls>

                    <source

                        src="${audio}"

                        type="audio/mpeg">

                </audio>

            `;

            container.appendChild(card);

        });

    })

    .catch(function (error) {

        console.error(error);

        container.innerHTML = `

            <p>

                Unable to load podcast episodes.

            </p>

        `;

    });

});
